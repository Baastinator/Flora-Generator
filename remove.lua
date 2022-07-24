local file
local T
local input = tonumber(...)


file = fs.open("effects.json","r")
local json = file.readAll()
file.close()
T = textutils.unserializeJSON(json)

for i=input, #T-1 do
    T[i].effect = T[i+1].effect
    T[i].type = T[i+1].type
end
T[#T] = nil

file = fs.open("effects.json","w")
file.write(textutils.serializeJSON(T))
file.close()
