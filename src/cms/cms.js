import CMS from 'netlify-cms'

import HomePagePreview from './preview-templates/HomePagePreview'
import AboutPagePreview from './preview-templates/AboutPagePreview'
import ServicesPagePreview from './preview-templates/ServicesPagePreview'
import ContactPagePreview from './preview-templates/ContactPagePreview'

CMS.registerPreviewStyle('/styles.css')
CMS.registerPreviewTemplate('home', HomePagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('services', ServicesPagePreview)
CMS.registerPreviewTemplate('contact', ContactPagePreview)
