const Overwrite = require('@tangle/overwrite')
const SimpleSet = require('@tangle/simple-set')

module.exports = {
  type: 'diet',

  props: {
    title: Overwrite(),
    dietName: Overwrite({
      valueSchema: {
        type: 'string',
        enum: [
          'omnivore',
          'vegetarian',
          'vegan'
        ]
      }
    }),
    allergies: SimpleSet(),
    intollerances: SimpleSet()
  }
}
