module.exports = ({ nome, materia, titulo, conteudo }) => {
   const today = new Date()
   const paragrafos = conteudo.split("\n")
   const handleParagrafos = () => {
      return paragrafos.map(p => {
         if(p.length > 0){
            return `<p>${p}</p> `
         }
      })
   }
return `
    <!doctype html>
    <html>
       <head>
          <meta charset="utf-8">
          <title>PDF Result Template</title>
          <style>
               .invoice-box {
                  width: 93%;
                  margin-left: 5%;
                  padding-top: 5%;
               }
               p {
                  text-align: justify;
               }
          </style>
       </head>
       <body>
          <div class="invoice-box">
            <div id="cabecalho">
               <p>Nome: ${nome}</p>
               <p>Aula: ${materia}</p>
               <p>Data: ${today.getDate()}/ ${today.getMonth()}</p>
            </div>
            <div id="conteudo">
               <h1>${titulo}</h1>
               ${handleParagrafos()}
            </div>
         </div>
       </body>
    </html>
    `;
};