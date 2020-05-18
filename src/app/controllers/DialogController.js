class DialogController {
  async teste (req, res) {
    // const teste = req.body
    res.json({ fulfillmentText: 'displayed&spoken response' })
  }
}

module.exports = new DialogController()
