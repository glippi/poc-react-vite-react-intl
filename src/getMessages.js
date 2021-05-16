import ENGLISH from './en.json'
import SPANISH from './es.json'

export default function getMessages(locale) {
  switch(true) {
    case locale === 'en':
      return ENGLISH;
    case locale === 'es':
      return SPANISH;
    default:
      return ENGLISH;
  }
}
