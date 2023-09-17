let firstname = pm.variables.replaceIn("{{$randomFirstName}}")
pm.environment.set("firstName",firstname)

let totalprice = pm.variables.replaceIn("{{$randomInt}}")
pm.environment.set("totalPrice",totalprice)