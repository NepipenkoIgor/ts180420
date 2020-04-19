import { average } from './functions';

describe('Test average Fn ', () => {
    it('should calc average right', () => {
        expect(average(2, '4')).toEqual('Avg is 3');
        expect(average('2', 4)).toEqual('Avg is 3');
        expect(average(3, 4, 5)).toEqual('Avg is 4');
    })
})
