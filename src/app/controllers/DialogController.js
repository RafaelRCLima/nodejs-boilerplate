class DialogController {
  async teste (req, res) {
    const agent = req.body
    const intent = agent.queryResult.intent.displayName

    if (intent === 'busca.artigo') {
      res.json({ fulfillmentText: `Resposta para ${agent.parameters.artigo}` })
    }
  }
}

module.exports = new DialogController()
