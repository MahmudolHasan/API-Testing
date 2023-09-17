let status_code =pm.response.code //save the server response code in a variable 
if (status_code == 201) //TO check if the response is 201 
{ 
pm.test("Status code is 201", function () {
    pm.response.to.have.status(201);
})}
else // If status code is anything other than 201
{
    pm.test(`Something went wrong!Status Code is ${status_code}`)
}