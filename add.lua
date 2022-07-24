local T
local file
local exists = fs.exists("effects.json")
if exists then 
    file = fs.open("effects.json","r")
    local json = file.readAll()
    file.close()
    T = textutils.unserializeJSON(json)
else
    T = {}
end 

local input

while true do
    term.clear() 
    term.setCursorPos(1,1)
    print("   | Flora Type |  Effect\n---|------------|-------------------------")
    for i, v in ipairs(T) do
        print((function(a) local b = #tostring(a) if b == 1 then return a.." " else return a end end)(i).." |  "..
        (({F="Flower  ", M="Mushroom", O="Other   "})[v.type] or "Invalid ")
        .."  |  "..v.effect)
    end
    print("\nPlease Write name of effect (write 'exit' to exit)")
    input = read()
    if (input == "exit") then break end
    T[#T+1] = {}
    T[#T].effect = input
    print("please input the type of flora. Flower (F), Mushroom (M), Other (O)")
    T[#T].type = (function (a)
        a = a:upper()
        if a == "F" or a == "M" or a == "O" then 
            return a  
        else return "I" end
    end)(read())
end

file = fs.open("effects.json","w")
file.write(textutils.serializeJSON(T))
file.close()

