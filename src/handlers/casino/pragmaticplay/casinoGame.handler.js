
function getNames (languages, defaultName) {
  return languages.reduce((prev, language) => {
    prev[language.code] = defaultName
    return prev
  }, {})
}

async function createAggregator (uniqueId, name, languages, transaction) {
  const aggregatorNames = getNames(languages, name)
  const [aggregator] = await db.CasinoAggregator.findOrCreate({
    defaults: { name: aggregatorNames, uniqueId },
    where: { uniqueId },
    returning: ['id'],
    transaction,
    logging: false
  })

  return aggregator
}

async function createProviders (aggregatorId, providers, languages, transaction) {
  const updatedProviders = await db.CasinoProvider.bulkCreate(providers.map(provider => {
    return {
      casinoAggregatorId: aggregatorId,
      uniqueId: provider.id,
      name: getNames(languages, provider.name),
      iconUrl: provider.logo
    }
  }), {
    updateOnDuplicate: ['name', 'iconUrl'],
    transaction,
    logging: false
  })

  return updatedProviders.reduce((prev, updatedProvider) => {
    prev[updatedProvider.uniqueId] = updatedProvider.id
    return prev
  }, {})
}

async function createCategories (categories, languages, transaction) {
  const updatedCategories = await db.CasinoCategory.bulkCreate(categories.map(category => {
    return {
      uniqueId: category.id,
      name: getNames(languages, category.name)
    }
  }), {
    returning: ['id', 'uniqueId'],
    updateOnDuplicate: ['updatedAt'],
    transaction,
    logging: true
  })

  return updatedCategories.reduce((prev, category) => {
    prev[category.uniqueId] = category.id
    return prev
  }, {})
}

async function createGames (categoryIdsMap, providerIdsMap, games, languages, transaction) {
  await db.casinoGame.bulkCreate(games.reduce((prev, game) => {
    const providerId = providerIdsMap[game.providerId]
    if (!providerId) return prev
    const categoryId = categoryIdsMap[game.typeId] ? categoryIdsMap[game.typeId] : categoryIdsMap[CATEGORIES.Live]
    if (!categoryId) return prev

    prev.push({
      casinoProviderId: providerId,
      casinoCategoryId: categoryId,
      uniqueId: game.id,
      name: getNames(languages, game.name),
      returnToPlayer: game.basicRTP,
      wageringContribution: 0,
      iconUrl: game.img_vertical ? game.img_vertical : game.img,
      devices: DEVICE_TYPE_MAP[game.device],
      demoAvailable: game.demo
    })
    return prev
  }, []), {
    updateOnDuplicate: ['name', 'iconUrl'],
    transaction,
    logging: true
  })

  return true
}
