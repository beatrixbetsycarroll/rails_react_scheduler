coaches = Coach.create([{ name: "Morgan Tookers" }, { name: "Tamra Webb " }])

5.times do |i|
    Student.create(
        name: "Student #{i + 1}",
    )
end

## Seeding Slots now:
## creating some slots, using randomness, knowing that many of these will fail to be created because of the validation 
## preventing a coach from having overlapping slots
## the slots being created will be taking place during the next 7 days

st = (DateTime.now + 1.days).beginning_of_hour

Coach.all().each do |coach|
    coach_id = coach.id
    20.times do |i|
        start_time = st + rand(0..24).hours + rand(0..7).days    
        Slot.create(coach_id: coach_id, start_time: start_time)
    end
end


