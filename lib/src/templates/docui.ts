export const docui = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Oncedoc</title>
  </head>
  <style>
      .base {
          min-height: 100vh;
          height: 100%;
          background-color: aliceblue;
      }
  </style>
  <body>
      <div class="base">
          <div class="container bg-white p-3">
              <h1>Oncedoc UI</h1>
              <hr>
              <div class="border rounded p-3">
                <div class="d-flex flex-column border rounded my-2 p-3 bg-light" style="cursor: pointer;" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <div class="w-100 d-flex flex-row">
                        <span class="bg-success text-white px-3 py-2 rounded">GET</span>
                        <span class="my-auto ms-3">/api/v1/home</span>
                    </div>
                </div>
                <div class="d-flex flex-column border rounded my-2 p-3 bg-light" style="cursor: pointer;" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <div class="w-100 d-flex flex-row">
                        <span class="bg-warning text-white px-3 py-2 rounded">POST</span>
                        <span class="my-auto ms-3">/api/v1/home</span>
                    </div>
                </div>
                <div class="d-flex flex-column border rounded my-2 p-3 bg-light" style="cursor: pointer;" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <div class="w-100 d-flex flex-row">
                        <span class="bg-danger text-white px-3 py-2 rounded">DELETE</span>
                        <span class="my-auto ms-3">/api/v1/home</span>
                    </div>
                </div>
                ###API_REGION###
              </div>
          </div>

      </div>

      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              ...
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>

  </body>
  <!-- CSS only -->
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
    crossorigin="anonymous"
  />
  <!-- JavaScript Bundle with Popper -->
  <script
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
    crossorigin="anonymous"
  ></script>
  <script></script>
</html>
`;
