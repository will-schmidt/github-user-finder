class GitHub {
  constructor() {
    this.client_id = '46c00288bfaa06e93f5f'
    this.client_secret = '9bd22499bac5ce4111fcfebb7eb9671968ee1ce4'
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    )

    const profile = await profileResponse.json()

    return {
      profile // Same as profile: profile
    }
  }
}
