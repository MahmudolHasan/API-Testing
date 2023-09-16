var jdata = pm.response.json(); // Saving the server response in an variable 


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

pm.test("First Name Validation",function(){
    pm.expect(jdata.firstname).to.equal("James")
})