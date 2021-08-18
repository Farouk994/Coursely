let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("./server");
let should = chai.should();
let school = require("./Server/API/routes/school");

chai.use(chaiHttp);

chai.use(chaiHttp);

describe("GET /api/school/all", function () {
   before((done) => {
      /* Todo: Clean up Database*/

      done();
   });

   it("should get name, location and city", (done) => {
      let school = {
         name: "Jack School of Sciences",
         description: "School full of angels",
         location: "Utah",
      };

      chai
         .request(server)
         .get("/api/school/all")
         .send(school)
         .end((err, res) => {
            res.should.have.status(200);
            done();
         });

      done();
   });
});

describe("POST /api/school/new", function () {
   before((done) => {
      // ! An error of connect is not function appears, needs to be fixed
      /* Todo: Clean up Database*/
      // chai
      //    .connect()
      //    .then(() => done())
      //    .catch((err) => done(err));
      done();
   });

   it("should post name, location and city", (done) => {
      let newSchool = {
         name: "Jack School of Sciences",
         location: "School full of angels",
         description: "Utah",
      };

      chai
         .request(server)
         .post("/api/school/new")
         .send(newSchool)
         .end((err, res) => {
            res.should.have.status(200);
            done();
         });

      done();
   });
});


