import { Pipe, PipeTransform } from "@angular/core";
import { pipe } from "rxjs";

@Pipe({
    name: 'FilterAsset'
})

export class FilterAssetPipe implements PipeTransform
{
    transform(allAssets : any, AssetFind: any):any {

        if(AssetFind === undefined)
        {
            return allAssets;
        }
        else{
            return allAssets.filter(
                function(x)
                {
                    return x.productId.includes(AssetFind);
                }
            )
        }

    }
}