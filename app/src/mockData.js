import Immutable from 'immutable'

export const existingComments = Immutable.List([
    Immutable.Map({
      nick: 'Bryan',
      ISOTime: new Date(2017, 7, 5, 23, 38, 15).toISOString(),
      text: 'still alive, huh'
    }),
    Immutable.Map({
      nick: 'Yorick',
      ISOTime: new Date(2017, 7, 5, 23, 39, 30).toISOString(),
      text: 'fighting it until the end'
    }),
    Immutable.Map({
      nick: 'Bryan',
      ISOTime: new Date(2017, 7, 6, 0, 12, 48).toISOString(),
      text: "it'll be over soon"
    })
])
