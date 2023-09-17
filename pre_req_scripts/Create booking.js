let firstname = pm.variables.replaceIn("{{$randomFirstName}}")
pm.environment.set("firstName",firstname)

let lastName = pm.variables.replaceIn("{{$randomLastName}}")
pm.environment.set("lastName",lastName)

let totalPrice = pm.variables.replaceIn("{{$randomInt}}")
pm.environment.set("totalPrice",totalPrice)

let depositPaid =pm.variables.replaceIn("{{$randomBoolean}}")
pm.environment.set("depositPaid",depositPaid)

let jpdepositPaid =pm.variables.replaceIn("{{$randomBoolean}}")
pm.environment.set("JdepositPaid",JSON.parse(jpdepositPaid))
pm.environment.set("Check",20)

const moment = require('moment')
const today = moment()
pm.environment.set("checkIn",today.format("YYYY-MM-DD"))
pm.environment.set("checkOut",today.add(5,'d').format("YYYY-MM-DD"))