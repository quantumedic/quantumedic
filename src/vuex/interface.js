import {buildResource} from '@/api/resource'

const API_ROOT = process.env.NODE_ENV === 'production' ? 'http://api.yeejuan.com' : 'http://api.quantumedic.com'

const resource = buildResource(API_ROOT)

export const AccountResource = () => resource('/account')
export const ArticleResource = () => resource('/doc')
export const TagResource = () => resource('/tag')