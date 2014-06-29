
var Module;
if (typeof Module === 'undefined') Module = eval('(function() { try { return Module || {} } catch(e) { return {} } })()');
if (!Module.expectedDataFileDownloads) {
  Module.expectedDataFileDownloads = 0;
  Module.finishedDataFileDownloads = 0;
}
Module.expectedDataFileDownloads++;
(function() {

  function runWithFS() {

function assert(check, msg) {
  if (!check) throw msg + new Error().stack;
}
Module['FS_createPath']('/', 'rm1_200', true, true);
Module['FS_createDataFile']('/rm1_200', 'transition_matrices', [115, 51, 10, 118, 101, 114, 115, 105, 111, 110, 32, 49, 46, 48, 10, 99, 104, 107, 115, 117, 109, 48, 32, 121, 101, 115, 10, 32, 32, 32, 32, 32, 32, 101, 110, 100, 104, 100, 114, 10, 68, 51, 34, 17, 45, 0, 0, 0, 3, 0, 0, 0, 4, 0, 0, 0, 28, 2, 0, 0, 120, 24, 133, 68, 0, 128, 18, 68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 165, 235, 239, 68, 0, 128, 18, 68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 92, 8, 199, 68, 0, 128, 18, 68, 191, 208, 71, 69, 0, 192, 204, 68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 104, 140, 194, 69, 0, 192, 204, 68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 198, 17, 82, 69, 0, 192, 204, 68, 24, 153, 60, 68, 0, 64, 231, 68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 170, 103, 230, 68, 0, 64, 231, 68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 188, 147, 205, 68, 0, 64, 231, 68, 150, 225, 139, 69, 0, 224, 236, 68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 237, 70, 218, 69, 0, 224, 236, 68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 82, 46, 51, 69, 0, 224, 236, 68, 252, 23, 80, 68, 0, 0, 132, 67, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 104, 232, 120, 68, 0, 0, 132, 67, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 118, 32, 67, 68, 0, 0, 132, 67, 174, 24, 170, 68, 0, 160, 69, 69, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 52, 155, 19, 69, 0, 160, 69, 69, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 153, 242, 180, 68, 0, 160, 69, 69, 130, 115, 104, 69, 0, 64, 135, 68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 108, 231, 231, 68, 0, 64, 135, 68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 244, 190, 17, 69, 0, 64, 135, 68, 102, 82, 174, 68, 0, 0, 23, 68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 158, 27, 130, 69, 0, 0, 23, 68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 28, 22, 19, 69, 0, 0, 23, 68, 38, 162, 170, 68, 0, 64, 89, 68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 209, 97, 68, 0, 64, 89, 68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 215, 38, 131, 68, 0, 64, 89, 68, 28, 170, 162, 68, 0, 128, 181, 67, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 150, 1, 207, 68, 0, 128, 181, 67, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 108, 194, 76, 68, 0, 128, 181, 67, 32, 32, 25, 69, 0, 144, 2, 69, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 246, 102, 220, 67, 0, 144, 2, 69, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 163, 34, 7, 69, 0, 144, 2, 69, 14, 54, 2, 69, 0, 128, 163, 68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 18, 221, 254, 67, 0, 128, 163, 68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 60, 137, 241, 67, 0, 128, 163, 68, 168, 248, 218, 67, 0, 64, 30, 68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 156, 153, 230, 67, 0, 64, 30, 68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 174, 220, 173, 67, 0, 64, 30, 68, 88, 224, 65, 69, 0, 32, 0, 69, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 158, 116, 141, 69, 0, 32, 0, 69, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 244, 5, 84, 69, 0, 32, 0, 69, 152, 97, 53, 68, 0, 0, 136, 67, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 236, 43, 117, 68, 0, 0, 136, 67, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 224, 156, 31, 68, 0, 0, 136, 67, 44, 106, 74, 69, 0, 64, 137, 68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128, 90, 145, 69, 0, 64, 137, 68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 44, 30, 69, 0, 64, 137, 68, 232, 48, 149, 69, 0, 0, 164, 68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 33, 63, 241, 68, 0, 0, 164, 68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 76, 210, 165, 68, 0, 0, 164, 68, 25, 162, 136, 68, 0, 0, 16, 68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 96, 57, 105, 68, 0, 0, 16, 68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 166, 5, 68, 0, 0, 16, 68, 84, 160, 123, 68, 0, 192, 9, 68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, 198, 42, 68, 0, 192, 9, 68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 159, 129, 238, 67, 0, 192, 9, 68, 10, 48, 240, 68, 0, 32, 239, 68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 96, 44, 26, 69, 0, 32, 239, 68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 206, 72, 5, 69, 0, 32, 239, 68, 205, 228, 12, 69, 0, 144, 10, 69, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 154, 190, 18, 69, 0, 144, 10, 69, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 214, 4, 71, 68, 0, 144, 10, 69, 34, 36, 144, 69, 0, 176, 20, 69, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 122, 170, 251, 69, 0, 176, 20, 69, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 172, 80, 205, 69, 0, 176, 20, 69, 106, 246, 52, 68, 0, 128, 165, 67, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 38, 38, 108, 68, 0, 128, 165, 67, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 170, 118, 10, 68, 0, 128, 165, 67, 70, 218, 132, 69, 0, 0, 216, 68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 163, 164, 57, 69, 0, 0, 216, 68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 174, 219, 94, 69, 0, 0, 216, 68, 201, 212, 169, 69, 0, 0, 17, 69, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 162, 212, 72, 69, 0, 0, 17, 69, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 158, 217, 58, 69, 0, 0, 17, 69, 38, 54, 18, 69, 0, 128, 183, 68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 115, 55, 58, 69, 0, 128, 183, 68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 92, 114, 196, 68, 0, 128, 183, 68, 58, 155, 8, 69, 0, 80, 122, 69, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 164, 216, 182, 69, 0, 80, 122, 69, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 198, 173, 177, 69, 0, 80, 122, 69, 216, 146, 19, 68, 0, 128, 186, 67, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 249, 71, 111, 68, 0, 128, 186, 67, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 242, 28, 68, 0, 128, 186, 67, 50, 70, 229, 68, 0, 192, 61, 68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128, 123, 65, 69, 0, 192, 61, 68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 73, 231, 218, 68, 0, 192, 61, 68, 165, 124, 189, 67, 0, 0, 116, 66, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 111, 45, 102, 67, 0, 0, 116, 66, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 236, 73, 67, 0, 0, 116, 66, 70, 9, 25, 69, 0, 64, 193, 68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 180, 75, 27, 69, 0, 64, 193, 68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 238, 252, 128, 69, 0, 64, 193, 68, 242, 134, 184, 69, 0, 176, 82, 69, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 210, 148, 103, 69, 0, 176, 82, 69, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 201, 145, 109, 69, 0, 176, 82, 69, 186, 166, 232, 69, 0, 208, 74, 69, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 182, 251, 60, 70, 0, 208, 74, 69, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 198, 124, 242, 69, 0, 208, 74, 69, 130, 36, 11, 69, 0, 128, 59, 68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 192, 19, 114, 69, 0, 128, 59, 68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 160, 133, 236, 68, 0, 128, 59, 68, 48, 79, 138, 70, 0, 80, 181, 69, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 62, 55, 175, 70, 0, 80, 181, 69, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 238, 5, 15, 70, 0, 80, 181, 69, 146, 156, 158, 69, 0, 32, 90, 69, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 212, 226, 98, 69, 0, 32, 90, 69, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 80, 131, 128, 69, 0, 32, 90, 69, 220, 181, 1, 68, 0, 128, 149, 67, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 124, 193, 65, 68, 0, 128, 149, 67, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 152, 176, 32, 68, 0, 128, 149, 67, 174, 186, 153, 68, 0, 128, 145, 67, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 170, 68, 207, 68, 0, 128, 145, 67, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 182, 4, 100, 68, 0, 128, 145, 67, 186, 215, 80, 67, 0, 0, 212, 66, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 28, 158, 218, 66, 0, 0, 212, 66, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 69, 134, 252, 65, 0, 0, 212, 66, 246, 247, 111, 68, 0, 192, 73, 68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 156, 113, 23, 69, 0, 192, 73, 68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 123, 90, 208, 68, 0, 192, 73, 68, 201, 129, 89, 68, 0, 224, 148, 68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 146, 105, 70, 68, 0, 224, 148, 68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 126, 225, 68, 0, 224, 148, 68, 106, 161, 84, 69, 0, 128, 142, 68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 229, 115, 4, 69, 0, 128, 142, 68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 244, 189, 243, 68, 0, 128, 142, 68, 130, 233, 133, 68, 0, 128, 194, 67, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 221, 13, 77, 68, 0, 128, 194, 67, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 48, 113, 240, 67, 0, 128, 194, 67, 102, 200, 83, 69, 0, 192, 240, 68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 111, 189, 182, 69, 0, 192, 240, 68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 97, 76, 119, 69, 0, 192, 240, 68, 146, 125, 29, 67, 0, 0, 140, 66, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 238, 139, 48, 67, 0, 0, 140, 66, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 46, 25, 87, 67, 0, 0, 140, 66, 12, 131, 173, 120], true, true);

  }
  if (Module['calledRun']) {
    runWithFS();
  } else {
    if (!Module['preRun']) Module['preRun'] = [];
    Module["preRun"].push(runWithFS); // FS is not initialized yet, wait for it
  }

})();