/**
 * tracking code pattern
 * sorted by code length based on document provided by company
 * for more variation we need more code to analyse 
 * @date 2022-03-22
 */
const trackingcode = [
    { id: 7, name: "tntiran", len: [-1, 9], type: /[0-9]/g },
    { id: 3, name: "tipaxco", len: [-1, 13], type: /[0-9]/g },
    { id: 4, name: "mahex", len: [-1, 14], type: /[0-9]/g },
    { id: 5, name: "chapar", len: [-1,17], type: /[0-9]/g },
    { id: 1, name: "post", len: [-1, 24], type: /[0-9]/g },
    { id: 6, name: "karapost", len: [1, 13], type: /[0-9]/g },
    { id: 2, name: "tipaxco", len: [15, 25], type: /[a-zA-Z0-9]/g },
];
module.exports = { detect: findtrackingcodecompany };
/**
 * findtrackingcodecompany
 * 
 * @date 2022-03-22
 * @param {string} code - tracking code
 * @returns {undefined|object} return undefined if cannot find the company, object of {id, name} if finding company is successful
 */
function findtrackingcodecompany(code) {
    for (let item of trackingcode) {
        if (((item.len[0] == -1 && code.length == item.len[1]) || (item.len[0] != -1 && code.length >= item.len[0] && code.length <= item.len[1])) && code.match(item.type) != null) {
            return (({ id, name }) => ({ id, name }))(item);
        }
    }
    return undefined;
}