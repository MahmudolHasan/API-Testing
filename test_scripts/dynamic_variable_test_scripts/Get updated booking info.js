let statusCode = pm.response.code
if (statuscode==200)
{
        let reponseData =pm.response.json()
        pm.test("First Name Validation",function(){
            pm.expect(reponseData.firstname).to.equal(pm.environment.get("firstName"))
        })

        pm.test("Last Name Validation", function(){
            pm.expect(reponseData.lastname).to.equal(pm.environment.get("lastName"))
          
        })

        pm.test("Total Price Validation", function(){
            pm.expect(reponseData.totalprice).to.equal(Number(pm.environment.get('totalPrice')))
        })

        pm.test("Deposit Validation", function(){
            pm.expect(reponseData.depositpaid).to.equal(Boolean(pm.environment.get('depositPaid')))
        })
        pm.test("Status code is 200", function () {
            pm.response.to.have.status(200);
        });
        pm.test("CheckIn Validation", function(){
            pm.expect(reponseData.bookingdates.checkin).to.equal(pm.environment.get("checkIn"))
        })

        pm.test("CheckOut Validation", function(){
            pm.expect(reponseData.bookingdates.checkout).to.equal(pm.environment.get("checkOut"))
        })
}
    
else 
{     
    pm.test(`Something is Wrong!Status COde is ${statuscode}`)
}