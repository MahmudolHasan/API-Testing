var jdata = pm.response.json(); // Save the server full response in a variable 
pm.environment.set("id", jdata.bookingid) // save the id from from variable in environment as another variable 

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