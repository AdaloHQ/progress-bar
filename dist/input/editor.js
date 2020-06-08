import {
  ProgressBar
} from '../../index.js'

export const components = {
  ProgressBar
}

export const config = {"displayName":"Progress Bar","name":"progress-bar","version":"dev","components":[{"name":"ProgressBar","displayName":"Progress Bar","defaultWidth":160,"defaultHeight":24,"props":[{"name":"CurrentValue","displayName":"Progress Value","type":"number","default":"10"},{"name":"MaxValue","displayName":"Maximum Value","type":"number","default":"100"},{"name":"colorr","displayName":"Color","type":"color","default":"#00A898"}]}]}