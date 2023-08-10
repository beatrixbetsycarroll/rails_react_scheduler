class Slot < ApplicationRecord
  belongs_to :coach
  validates :coach, presence: true

  belongs_to :student, optional: true

  validates_presence_of :start_time

  validate :must_not_overlap_with_another_slot_belonging_to_this_coach

  def end_time
    self.start_time + 2.hours
  end

  def must_not_overlap_with_another_slot_belonging_to_this_coach
    my_other_slots = Slot.where(coach_id: self.coach.id).where.not(id: self.id)
    if my_other_slots
      my_other_slots.each do |existing_slot|        
        unavail = Range.new(existing_slot.start_time - 2.hours, existing_slot.start_time + 2.hours, exclude_end = true)
        if unavail.cover?(self.start_time)
          overlapping_with_existing_slot_error(self.start_time, self.coach.id)
        end

      end
    end
  end

  def overlapping_with_existing_slot_error(attempted_start_time, coach_id)
    errors.add(:overlapping_with_existing_slot_error, "There is already an event scheduled during some/all of this time for this coach. Attempted start time: #{attempted_start_time}, coach id: #{coach_id}")

    puts "overlapping_with_existing_slot_error: "
    puts "There is already an event scheduled during some/all of this time for this coach. Attempted start time: #{attempted_start_time}, coach id: #{coach_id}"
  end

end