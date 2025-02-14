import test from 'tape-promise/tape';
import {isBrowser} from '@loaders.gl/core';
import {NodeFile} from '@loaders.gl/loader-utils';

const SLPK_URL = '@loaders.gl/i3s/test/data/DA12_subset.slpk';

// TODO v4.0 restore this test
test.skip('NodeFile#open and read', async (t) => {
  if (!isBrowser) {
    const provider = new NodeFile(SLPK_URL);
    const arrayBuffer = await provider.read(4, 1);

    const reference = new Buffer(new Uint8Array([0]));
    t.equals(reference.compare(Buffer.from(arrayBuffer)), 0);
  }
  t.end();
});
