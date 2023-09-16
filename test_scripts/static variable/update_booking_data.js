let statuscode =pm.response.code
console.log(statuscode)
switch(statuscode){
    case(200):
    pm.test("OK 200", function () {
    pm.response.to.have.status(200);
    });
    break;
    case(400):
    pm.test("Bad Request 400", function () {
    pm.response.to.have.status(400);
    });
    break;
    case(403):
    pm.test("Forbidden 403", function () {
    pm.response.to.have.status(403);
    });
    break;
    case(404):
    pm.test("Forbidden 404", function () {
    pm.response.to.have.status(404);
    });
    break;

}
