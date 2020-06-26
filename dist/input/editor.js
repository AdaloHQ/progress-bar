import {
  ProgressBar
} from '../../index.js'

export const components = {
  ProgressBar
}

export const config = {"displayName":"Progress Bar","name":"progress-bar","version":"dev","components":[{"name":"ProgressBar","displayName":"Progress Bar","defaultWidth":375,"defaultHeight":4,"props":[{"name":"currentValue","displayName":"Progress Value","type":"number","default":"10"},{"name":"maxValue","displayName":"Maximum Value","type":"number","default":"100"},{"name":"color","displayName":"Color","type":"color","default":"#00A898"},{"name":"backgroundColor","displayName":"Background Color","type":"color","default":"#00A89840"}],"resizeY":true}]}