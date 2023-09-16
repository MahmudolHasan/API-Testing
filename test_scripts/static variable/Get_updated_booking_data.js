var jdata = pm.response.json();
pm.environment.set("id", jdata.bookingid)

var jdata = pm.response.json();
pm.environment.set("id", jdata.bookingid)

pm.test("First Name Validation",function(){
    pm.expect(jdata.firstname).to.equal("Harry")
})

pm.test("Last Name Validation", function(){
    pm.expect(jdata.lastname).to.equal("Diaz")
})

pm.test("Total Price Validation", function(){
    pm.expect(jdata.totalprice).to.equal(2110)
})


pm.test("Deposit Paid Validation", function(){
    pm.expect(jdata.depositpaid).to.equal(true)
})

pm.test("CheckIn Validation", function(){
    pm.expect(jdata.bookingdates.checkin).to.equal("2023-05-09")
})

pm.test("Checkout validation", function(){
    pm.expect(jdata.bookingdates.checkout).to.equal("2023-07-09")
})

pm.test("Additional Needs Validation", function(){
    pm.expect(jdata.additionalneeds).to.equal("Breakfast,Dinner")
})