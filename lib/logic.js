/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* global getAssetRegistry */

/**
 * Trade a product to a new player
 * @param  {org.hyperledger_composer.scms.MoveProduct} moveProduct - the trade product transaction
 * @transaction
 */
async function moveProduct(moveProduct) {   // eslint-disable-line no-unused-vars
  
    moveProduct.product.issuer = moveProduct.product.owner;

  moveProduct.product.owner = moveProduct.newOwner;

// 	MoveProduct.product.MoveProduct = MoveProduct.MoveProduct;

  const assetRegistry = await getAssetRegistry('org.hyperledger_composer.scms.Product');
  await assetRegistry.update(moveProduct.product);
}