

var jdata = pm.response.json(); // Saving the server response in an variable 
pm.environment.set("id", jdata.bookingid)

pm.test("First Name Validation",function(){
    pm.expect(jdata.firstname).to.equal("Cameron")
})

pm.test("Last Name Validation", function(){
    pm.expect(jdata.lastname).to.equal("Winter")
})

pm.test("Total Price Validation", function(){
    pm.expect(jdata.totalprice).to.equal(1110)
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

let status_code =pm.response.code //save the server response code in a variable 

if (status_code == 200) //TO check if the response is 201 
{ 
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
})}
else // If status code is anything other than 201
{
    pm.test(`Something went wrong!Status Code is ${status_code}`)
}