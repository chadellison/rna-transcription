function DnaTranscriber() {}

DnaTranscriber.prototype.toRna = function(dna) {
  rna = ''
  for (var i = 0; i < dna.length; i += 1) {
    rna += mapSingleDna(dna[i])
  }
  return rna
}

mapSingleDna = function(dna) {
  switch(dna) {
  case "C":
    return "G";
    break;
  case "G":
    return "C"
    break;
  case "A":
    return "U"
    break;
  case "T":
    return "A"
    break;
  }
}

module.exports = DnaTranscriber;
