import { Configuration } from "../configuration"

describe('Configuration', () => {
    let c: Configuration

    beforeAll(() => {
        const value = new Map<string, string>([
            ['host', 'example.com'],
        ])
        c = new Configuration('api', 1, value)
    })

    /* REMOVE: Low values tests to feel out API */
    describe('works', () => {
        it('get', () => {
            expect(c.get('host')).toEqual('example.com')
        })
    
        it.skip('entries', () => {
            expect(c.entries()).toEqual([])
        })
    })
})