class DialogController {
  async teste (req, res) {
    const agent = req.body.queryResult
    const intent = agent.intent.displayName

    if (intent === 'busca.artigo') {
      res.json({ fulfillmentText: `Resposta para ${agent.parameters.artigo}` })
    }

    res.json({ fulfillmentText: `Seu intent é ${intent}` })
  }
}

module.exports = new DialogController()
