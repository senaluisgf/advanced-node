import { AccessToken } from '@/domain/models'

describe('AccessToken', () => {
  it('Shold create with a value', () => {
    const sut = new AccessToken('any_value')

    expect(sut).toEqual({ value: 'any_value' })
  })

  it('Shold expire in 1800000 ms', () => {
    expect(AccessToken.expirationInMs).toBe(1800000)
  })
})
