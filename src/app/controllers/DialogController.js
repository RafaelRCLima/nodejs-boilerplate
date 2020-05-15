class DialogController {
  async teste (req, res){
    const teste = req.body
    res.json(teste)
  }
}

module.exports = new DialogController()
