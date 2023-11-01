-- client.lua
RegisterNUICallback('helloWorld', function(data, cb)
	print("Hello World")
	cb('ok')
end)