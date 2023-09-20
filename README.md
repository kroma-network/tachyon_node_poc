# Tachyon Node PoC(For Devconnect)

Tachyon Node is a node binding library of [Tachyon](https://github.com/kroma-network/tachyon). The tested commit hash is [b6c8ada](https://github.com/kroma-network/tachyon/commit/b6c8ada0a8d290360369b90fb2ab8d7120eb3a75).

## How to install?

```shell
> npm install https://github.com/kroma-network/tachyon_node_poc
```

## What can you do?

### Prime field

See [prime_field.spec.ts](https://github.com/kroma-network/tachyon/blob/main/tachyon/node/test/src/math/finite_fields/prime_field.spec.ts) for examples.

```shell
> let tachyon = require('tachyon_node_poc')
undefined
> tachyon.math.bn254.init()
undefined
> p = tachyon.math.bn254.Fr.random()
Fr {}
> q = tachyon.math.bn254.Fr.random()
Fr {}
> (p + q).toString()
'116658455562476682100789064146261617003951312006447670154557135211957154224841993485589765374050801754632931052365291533877045191908896108707593589433622'
```

### Elliptic curve

See [affine_point.spec.ts](https://github.com/kroma-network/tachyon/blob/main/tachyon/node/test/src/math/elliptic_curves/short_weierstrass/affine_point.spec.ts) for examples.

```shell
> let tachyon = require('tachyon_node_poc')
undefined
> tachyon.math.bn254.init()
undefined
> a = tachyon.math.bn254.G1AffinePoint.random()
G1AffinePoint {}
> b = tachyon.math.bn254.G1AffinePoint.random()
G1AffinePoint {}
> (a.add(b)).toString()
'(15991289527953775276169676880039034233365889570535218980931568106712953143813, 2535530072348470631610766730528491705619676201677411394774127270861669949717)(19991506765078080024803720110493226467100161300182222694897668961965012966476, 2032195869290979727165889553411078216863059808704129745453825224412912783927)'
```
