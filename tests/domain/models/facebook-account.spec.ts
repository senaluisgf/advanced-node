import { FacebookAccount } from '@/domain/models'

describe('FacebookAccount', () => {
  const fbData = {
    name: 'any_fb_name',
    email: 'any_fb_email',
    facebookId: 'any_fb_id'
  }
  it('Shold create account with facebook data only', () => {
    const accountData = {}

    const sut = new FacebookAccount(fbData, accountData)

    expect(sut).toEqual(fbData)
  })

  it('Shold not update name if its not empty', () => {
    const accountData = { name: 'any_name' }

    const sut = new FacebookAccount(fbData, accountData)

    expect(sut).toEqual({ ...fbData, name: 'any_name' })
  })

  it('Shold update name if its empty', () => {
    const accountData = { id: 'any_id' }

    const sut = new FacebookAccount(fbData, accountData)

    expect(sut).toEqual({ ...fbData, id: 'any_id' })
  })
})
