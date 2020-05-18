class DialogController {
  async teste (req, res) {
    const agent = req.body.queryResult
    const intent = agent.intent.displayName

    if (intent === 'busca.artigo') {
      if (agent.parameters.artigo === 'Rest') {
        res.json({ fulfillmentText: 'Rest é um padrão de arquitetura baseado nos métodos Get, Post, Put e Delete' })
      }
    }

    res.json({ fulfillmentText: `Seu intent é ${intent}` })
  }
}

module.exports = new DialogController()
