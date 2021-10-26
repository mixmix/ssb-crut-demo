const test = require('tape')
const Bot = require('scuttle-testbot')

const print = (obj) => console.log(JSON.stringify(obj, null, 2))

test('diet crut', t => {
  const stack = Bot
    .use(require('ssb-backlinks'))
    .use(require('..'))

  const ssb = stack()

  ssb.post(m => print(m.value.content))

  ssb.diet.create({ title: 'mix' }, (err, dietId) => {
    t.error(err, 'creates diet record')

    const update = {
      title: "mix's diet",
      dietName: 'omnivore',
      intollerances: { add: ['onions'] }
    }
    ssb.diet.update(dietId, update, (err, updateId) => {
      t.error(err, 'updated diet record')

      ssb.diet.read(dietId, (err, dietRecord) => {
        t.error(err, 'reads diet record')

        print(dietRecord)

        ssb.close()
        t.end()
      })
    })
  })
})
