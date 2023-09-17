let reponseData = pm.response.json()
pm.environment.set("id",reponseData.bookingid)


let statuscode = pm.response.code

if(statuscode == 200)
{

    pm.test("Status code is 200", function () {
        pm.response.to.have.status(200);
    })
}

else 
{     
    pm.test(`Something is Wrong!Status COde is ${statuscode}`)
}