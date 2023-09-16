var token=pm.response.json(); // save the token from response in a variable 

pm.environment.set("tokenid",token.token) //set the variable in environment 

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