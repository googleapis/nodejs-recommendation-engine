// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import * as Long from "long";
import {protobuf as $protobuf} from "google-gax";
/** Namespace google. */
export namespace google {

    /** Namespace cloud. */
    namespace cloud {

        /** Namespace recommendationengine. */
        namespace recommendationengine {

            /** Namespace v1beta1. */
            namespace v1beta1 {

                /** Properties of a CatalogItem. */
                interface ICatalogItem {

                    /** CatalogItem id */
                    id?: (string|null);

                    /** CatalogItem categoryHierarchies */
                    categoryHierarchies?: (google.cloud.recommendationengine.v1beta1.CatalogItem.ICategoryHierarchy[]|null);

                    /** CatalogItem title */
                    title?: (string|null);

                    /** CatalogItem description */
                    description?: (string|null);

                    /** CatalogItem itemAttributes */
                    itemAttributes?: (google.cloud.recommendationengine.v1beta1.IFeatureMap|null);

                    /** CatalogItem languageCode */
                    languageCode?: (string|null);

                    /** CatalogItem tags */
                    tags?: (string[]|null);

                    /** CatalogItem itemGroupId */
                    itemGroupId?: (string|null);

                    /** CatalogItem productMetadata */
                    productMetadata?: (google.cloud.recommendationengine.v1beta1.IProductCatalogItem|null);
                }

                /** Represents a CatalogItem. */
                class CatalogItem implements ICatalogItem {

                    /**
                     * Constructs a new CatalogItem.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recommendationengine.v1beta1.ICatalogItem);

                    /** CatalogItem id. */
                    public id: string;

                    /** CatalogItem categoryHierarchies. */
                    public categoryHierarchies: google.cloud.recommendationengine.v1beta1.CatalogItem.ICategoryHierarchy[];

                    /** CatalogItem title. */
                    public title: string;

                    /** CatalogItem description. */
                    public description: string;

                    /** CatalogItem itemAttributes. */
                    public itemAttributes?: (google.cloud.recommendationengine.v1beta1.IFeatureMap|null);

                    /** CatalogItem languageCode. */
                    public languageCode: string;

                    /** CatalogItem tags. */
                    public tags: string[];

                    /** CatalogItem itemGroupId. */
                    public itemGroupId: string;

                    /** CatalogItem productMetadata. */
                    public productMetadata?: (google.cloud.recommendationengine.v1beta1.IProductCatalogItem|null);

                    /** CatalogItem recommendationType. */
                    public recommendationType?: "productMetadata";

                    /**
                     * Creates a new CatalogItem instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CatalogItem instance
                     */
                    public static create(properties?: google.cloud.recommendationengine.v1beta1.ICatalogItem): google.cloud.recommendationengine.v1beta1.CatalogItem;

                    /**
                     * Encodes the specified CatalogItem message. Does not implicitly {@link google.cloud.recommendationengine.v1beta1.CatalogItem.verify|verify} messages.
                     * @param message CatalogItem message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recommendationengine.v1beta1.ICatalogItem, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CatalogItem message, length delimited. Does not implicitly {@link google.cloud.recommendationengine.v1beta1.CatalogItem.verify|verify} messages.
                     * @param message CatalogItem message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recommendationengine.v1beta1.ICatalogItem, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CatalogItem message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CatalogItem
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommendationengine.v1beta1.CatalogItem;

                    /**
                     * Decodes a CatalogItem message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CatalogItem
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommendationengine.v1beta1.CatalogItem;

                    /**
                     * Verifies a CatalogItem message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CatalogItem message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CatalogItem
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recommendationengine.v1beta1.CatalogItem;

                    /**
                     * Creates a plain object from a CatalogItem message. Also converts values to other types if specified.
                     * @param message CatalogItem
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recommendationengine.v1beta1.CatalogItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CatalogItem to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace CatalogItem {

                    /** Properties of a CategoryHierarchy. */
                    interface ICategoryHierarchy {

                        /** CategoryHierarchy categories */
                        categories?: (string[]|null);
                    }

                    /** Represents a CategoryHierarchy. */
                    class CategoryHierarchy implements ICategoryHierarchy {

                        /**
                         * Constructs a new CategoryHierarchy.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.recommendationengine.v1beta1.CatalogItem.ICategoryHierarchy);

                        /** CategoryHierarchy categories. */
                        public categories: string[];

                        /**
                         * Creates a new CategoryHierarchy instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CategoryHierarchy instance
                         */
                        public static create(properties?: google.cloud.recommendationengine.v1beta1.CatalogItem.ICategoryHierarchy): google.cloud.recommendationengine.v1beta1.CatalogItem.CategoryHierarchy;

                        /**
                         * Encodes the specified CategoryHierarchy message. Does not implicitly {@link google.cloud.recommendationengine.v1beta1.CatalogItem.CategoryHierarchy.verify|verify} messages.
                         * @param message CategoryHierarchy message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.recommendationengine.v1beta1.CatalogItem.ICategoryHierarchy, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CategoryHierarchy message, length delimited. Does not implicitly {@link google.cloud.recommendationengine.v1beta1.CatalogItem.CategoryHierarchy.verify|verify} messages.
                         * @param message CategoryHierarchy message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.recommendationengine.v1beta1.CatalogItem.ICategoryHierarchy, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CategoryHierarchy message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CategoryHierarchy
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommendationengine.v1beta1.CatalogItem.CategoryHierarchy;

                        /**
                         * Decodes a CategoryHierarchy message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CategoryHierarchy
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommendationengine.v1beta1.CatalogItem.CategoryHierarchy;

                        /**
                         * Verifies a CategoryHierarchy message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CategoryHierarchy message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CategoryHierarchy
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.recommendationengine.v1beta1.CatalogItem.CategoryHierarchy;

                        /**
                         * Creates a plain object from a CategoryHierarchy message. Also converts values to other types if specified.
                         * @param message CategoryHierarchy
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.recommendationengine.v1beta1.CatalogItem.CategoryHierarchy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CategoryHierarchy to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Properties of a ProductCatalogItem. */
                interface IProductCatalogItem {

                    /** ProductCatalogItem exactPrice */
                    exactPrice?: (google.cloud.recommendationengine.v1beta1.ProductCatalogItem.IExactPrice|null);

                    /** ProductCatalogItem priceRange */
                    priceRange?: (google.cloud.recommendationengine.v1beta1.ProductCatalogItem.IPriceRange|null);

                    /** ProductCatalogItem costs */
                    costs?: ({ [k: string]: number }|null);

                    /** ProductCatalogItem currencyCode */
                    currencyCode?: (string|null);

                    /** ProductCatalogItem stockState */
                    stockState?: (google.cloud.recommendationengine.v1beta1.ProductCatalogItem.StockState|keyof typeof google.cloud.recommendationengine.v1beta1.ProductCatalogItem.StockState|null);

                    /** ProductCatalogItem availableQuantity */
                    availableQuantity?: (number|Long|string|null);

                    /** ProductCatalogItem canonicalProductUri */
                    canonicalProductUri?: (string|null);

                    /** ProductCatalogItem images */
                    images?: (google.cloud.recommendationengine.v1beta1.IImage[]|null);
                }

                /** Represents a ProductCatalogItem. */
                class ProductCatalogItem implements IProductCatalogItem {

                    /**
                     * Constructs a new ProductCatalogItem.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recommendationengine.v1beta1.IProductCatalogItem);

                    /** ProductCatalogItem exactPrice. */
                    public exactPrice?: (google.cloud.recommendationengine.v1beta1.ProductCatalogItem.IExactPrice|null);

                    /** ProductCatalogItem priceRange. */
                    public priceRange?: (google.cloud.recommendationengine.v1beta1.ProductCatalogItem.IPriceRange|null);

                    /** ProductCatalogItem costs. */
                    public costs: { [k: string]: number };

                    /** ProductCatalogItem currencyCode. */
                    public currencyCode: string;

                    /** ProductCatalogItem stockState. */
                    public stockState: (google.cloud.recommendationengine.v1beta1.ProductCatalogItem.StockState|keyof typeof google.cloud.recommendationengine.v1beta1.ProductCatalogItem.StockState);

                    /** ProductCatalogItem availableQuantity. */
                    public availableQuantity: (number|Long|string);

                    /** ProductCatalogItem canonicalProductUri. */
                    public canonicalProductUri: string;

                    /** ProductCatalogItem images. */
                    public images: google.cloud.recommendationengine.v1beta1.IImage[];

                    /** ProductCatalogItem price. */
                    public price?: ("exactPrice"|"priceRange");

                    /**
                     * Creates a new ProductCatalogItem instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ProductCatalogItem instance
                     */
                    public static create(properties?: google.cloud.recommendationengine.v1beta1.IProductCatalogItem): google.cloud.recommendationengine.v1beta1.ProductCatalogItem;

                    /**
                     * Encodes the specified ProductCatalogItem message. Does not implicitly {@link google.cloud.recommendationengine.v1beta1.ProductCatalogItem.verify|verify} messages.
                     * @param message ProductCatalogItem message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recommendationengine.v1beta1.IProductCatalogItem, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ProductCatalogItem message, length delimited. Does not implicitly {@link google.cloud.recommendationengine.v1beta1.ProductCatalogItem.verify|verify} messages.
                     * @param message ProductCatalogItem message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recommendationengine.v1beta1.IProductCatalogItem, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ProductCatalogItem message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ProductCatalogItem
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommendationengine.v1beta1.ProductCatalogItem;

                    /**
                     * Decodes a ProductCatalogItem message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ProductCatalogItem
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommendationengine.v1beta1.ProductCatalogItem;

                    /**
                     * Verifies a ProductCatalogItem message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ProductCatalogItem message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ProductCatalogItem
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recommendationengine.v1beta1.ProductCatalogItem;

                    /**
                     * Creates a plain object from a ProductCatalogItem message. Also converts values to other types if specified.
                     * @param message ProductCatalogItem
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recommendationengine.v1beta1.ProductCatalogItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ProductCatalogItem to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace ProductCatalogItem {

                    /** Properties of an ExactPrice. */
                    interface IExactPrice {

                        /** ExactPrice displayPrice */
                        displayPrice?: (number|null);

                        /** ExactPrice originalPrice */
                        originalPrice?: (number|null);
                    }

                    /** Represents an ExactPrice. */
                    class ExactPrice implements IExactPrice {

                        /**
                         * Constructs a new ExactPrice.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.recommendationengine.v1beta1.ProductCatalogItem.IExactPrice);

                        /** ExactPrice displayPrice. */
                        public displayPrice: number;

                        /** ExactPrice originalPrice. */
                        public originalPrice: number;

                        /**
                         * Creates a new ExactPrice instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ExactPrice instance
                         */
                        public static create(properties?: google.cloud.recommendationengine.v1beta1.ProductCatalogItem.IExactPrice): google.cloud.recommendationengine.v1beta1.ProductCatalogItem.ExactPrice;

                        /**
                         * Encodes the specified ExactPrice message. Does not implicitly {@link google.cloud.recommendationengine.v1beta1.ProductCatalogItem.ExactPrice.verify|verify} messages.
                         * @param message ExactPrice message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.recommendationengine.v1beta1.ProductCatalogItem.IExactPrice, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ExactPrice message, length delimited. Does not implicitly {@link google.cloud.recommendationengine.v1beta1.ProductCatalogItem.ExactPrice.verify|verify} messages.
                         * @param message ExactPrice message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.recommendationengine.v1beta1.ProductCatalogItem.IExactPrice, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an ExactPrice message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ExactPrice
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommendationengine.v1beta1.ProductCatalogItem.ExactPrice;

                        /**
                         * Decodes an ExactPrice message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ExactPrice
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommendationengine.v1beta1.ProductCatalogItem.ExactPrice;

                        /**
                         * Verifies an ExactPrice message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an ExactPrice message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ExactPrice
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.recommendationengine.v1beta1.ProductCatalogItem.ExactPrice;

                        /**
                         * Creates a plain object from an ExactPrice message. Also converts values to other types if specified.
                         * @param message ExactPrice
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.recommendationengine.v1beta1.ProductCatalogItem.ExactPrice, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ExactPrice to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a PriceRange. */
                    interface IPriceRange {

                        /** PriceRange min */
                        min?: (number|null);

                        /** PriceRange max */
                        max?: (number|null);
                    }

                    /** Represents a PriceRange. */
                    class PriceRange implements IPriceRange {

                        /**
                         * Constructs a new PriceRange.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.recommendationengine.v1beta1.ProductCatalogItem.IPriceRange);

                        /** PriceRange min. */
                        public min: number;

                        /** PriceRange max. */
                        public max: number;

                        /**
                         * Creates a new PriceRange instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns PriceRange instance
                         */
                        public static create(properties?: google.cloud.recommendationengine.v1beta1.ProductCatalogItem.IPriceRange): google.cloud.recommendationengine.v1beta1.ProductCatalogItem.PriceRange;

                        /**
                         * Encodes the specified PriceRange message. Does not implicitly {@link google.cloud.recommendationengine.v1beta1.ProductCatalogItem.PriceRange.verify|verify} messages.
                         * @param message PriceRange message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.recommendationengine.v1beta1.ProductCatalogItem.IPriceRange, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified PriceRange message, length delimited. Does not implicitly {@link google.cloud.recommendationengine.v1beta1.ProductCatalogItem.PriceRange.verify|verify} messages.
                         * @param message PriceRange message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.recommendationengine.v1beta1.ProductCatalogItem.IPriceRange, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a PriceRange message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns PriceRange
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommendationengine.v1beta1.ProductCatalogItem.PriceRange;

                        /**
                         * Decodes a PriceRange message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns PriceRange
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommendationengine.v1beta1.ProductCatalogItem.PriceRange;

                        /**
                         * Verifies a PriceRange message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a PriceRange message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns PriceRange
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.recommendationengine.v1beta1.ProductCatalogItem.PriceRange;

                        /**
                         * Creates a plain object from a PriceRange message. Also converts values to other types if specified.
                         * @param message PriceRange
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.recommendationengine.v1beta1.ProductCatalogItem.PriceRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this PriceRange to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** StockState enum. */
                    enum StockState {
                        STOCK_STATE_UNSPECIFIED = 0,
                        IN_STOCK = 0,
                        OUT_OF_STOCK = 1,
                        PREORDER = 2,
                        BACKORDER = 3
                    }
                }

                /** Properties of an Image. */
                interface IImage {

                    /** Image uri */
                    uri?: (string|null);

                    /** Image height */
                    height?: (number|null);

                    /** Image width */
                    width?: (number|null);
                }

                /** Represents an Image. */
                class Image implements IImage {

                    /**
                     * Constructs a new Image.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recommendationengine.v1beta1.IImage);

                    /** Image uri. */
                    public uri: string;

                    /** Image height. */
                    public height: number;

                    /** Image width. */
                    public width: number;

                    /**
                     * Creates a new Image instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Image instance
                     */
                    public static create(properties?: google.cloud.recommendationengine.v1beta1.IImage): google.cloud.recommendationengine.v1beta1.Image;

                    /**
                     * Encodes the specified Image message. Does not implicitly {@link google.cloud.recommendationengine.v1beta1.Image.verify|verify} messages.
                     * @param message Image message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recommendationengine.v1beta1.IImage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Image message, length delimited. Does not implicitly {@link google.cloud.recommendationengine.v1beta1.Image.verify|verify} messages.
                     * @param message Image message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recommendationengine.v1beta1.IImage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Image message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Image
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommendationengine.v1beta1.Image;

                    /**
                     * Decodes an Image message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Image
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommendationengine.v1beta1.Image;

                    /**
                     * Verifies an Image message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Image message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Image
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recommendationengine.v1beta1.Image;

                    /**
                     * Creates a plain object from an Image message. Also converts values to other types if specified.
                     * @param message Image
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recommendationengine.v1beta1.Image, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Image to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a FeatureMap. */
                interface IFeatureMap {

                    /** FeatureMap categoricalFeatures */
                    categoricalFeatures?: ({ [k: string]: google.cloud.recommendationengine.v1beta1.FeatureMap.IStringList }|null);

                    /** FeatureMap numericalFeatures */
                    numericalFeatures?: ({ [k: string]: google.cloud.recommendationengine.v1beta1.FeatureMap.IFloatList }|null);
                }

                /** Represents a FeatureMap. */
                class FeatureMap implements IFeatureMap {

                    /**
                     * Constructs a new FeatureMap.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recommendationengine.v1beta1.IFeatureMap);

                    /** FeatureMap categoricalFeatures. */
                    public categoricalFeatures: { [k: string]: google.cloud.recommendationengine.v1beta1.FeatureMap.IStringList };

                    /** FeatureMap numericalFeatures. */
                    public numericalFeatures: { [k: string]: google.cloud.recommendationengine.v1beta1.FeatureMap.IFloatList };

                    /**
                     * Creates a new FeatureMap instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns FeatureMap instance
                     */
                    public static create(properties?: google.cloud.recommendationengine.v1beta1.IFeatureMap): google.cloud.recommendationengine.v1beta1.FeatureMap;

                    /**
                     * Encodes the specified FeatureMap message. Does not implicitly {@link google.cloud.recommendationengine.v1beta1.FeatureMap.verify|verify} messages.
                     * @param message FeatureMap message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recommendationengine.v1beta1.IFeatureMap, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified FeatureMap message, length delimited. Does not implicitly {@link google.cloud.recommendationengine.v1beta1.FeatureMap.verify|verify} messages.
                     * @param message FeatureMap message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recommendationengine.v1beta1.IFeatureMap, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a FeatureMap message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns FeatureMap
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommendationengine.v1beta1.FeatureMap;

                    /**
                     * Decodes a FeatureMap message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns FeatureMap
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommendationengine.v1beta1.FeatureMap;

                    /**
                     * Verifies a FeatureMap message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a FeatureMap message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns FeatureMap
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recommendationengine.v1beta1.FeatureMap;

                    /**
                     * Creates a plain object from a FeatureMap message. Also converts values to other types if specified.
                     * @param message FeatureMap
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recommendationengine.v1beta1.FeatureMap, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this FeatureMap to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace FeatureMap {

                    /** Properties of a StringList. */
                    interface IStringList {

                        /** StringList value */
                        value?: (string[]|null);
                    }

                    /** Represents a StringList. */
                    class StringList implements IStringList {

                        /**
                         * Constructs a new StringList.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.recommendationengine.v1beta1.FeatureMap.IStringList);

                        /** StringList value. */
                        public value: string[];

                        /**
                         * Creates a new StringList instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns StringList instance
                         */
                        public static create(properties?: google.cloud.recommendationengine.v1beta1.FeatureMap.IStringList): google.cloud.recommendationengine.v1beta1.FeatureMap.StringList;

                        /**
                         * Encodes the specified StringList message. Does not implicitly {@link google.cloud.recommendationengine.v1beta1.FeatureMap.StringList.verify|verify} messages.
                         * @param message StringList message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.recommendationengine.v1beta1.FeatureMap.IStringList, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified StringList message, length delimited. Does not implicitly {@link google.cloud.recommendationengine.v1beta1.FeatureMap.StringList.verify|verify} messages.
                         * @param message StringList message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.recommendationengine.v1beta1.FeatureMap.IStringList, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a StringList message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns StringList
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommendationengine.v1beta1.FeatureMap.StringList;

                        /**
                         * Decodes a StringList message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns StringList
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommendationengine.v1beta1.FeatureMap.StringList;

                        /**
                         * Verifies a StringList message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a StringList message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns StringList
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.recommendationengine.v1beta1.FeatureMap.StringList;

                        /**
                         * Creates a plain object from a StringList message. Also converts values to other types if specified.
                         * @param message StringList
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.recommendationengine.v1beta1.FeatureMap.StringList, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this StringList to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a FloatList. */
                    interface IFloatList {

                        /** FloatList value */
                        value?: (number[]|null);
                    }

                    /** Represents a FloatList. */
                    class FloatList implements IFloatList {

                        /**
                         * Constructs a new FloatList.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.recommendationengine.v1beta1.FeatureMap.IFloatList);

                        /** FloatList value. */
                        public value: number[];

                        /**
                         * Creates a new FloatList instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns FloatList instance
                         */
                        public static create(properties?: google.cloud.recommendationengine.v1beta1.FeatureMap.IFloatList): google.cloud.recommendationengine.v1beta1.FeatureMap.FloatList;

                        /**
                         * Encodes the specified FloatList message. Does not implicitly {@link google.cloud.recommendationengine.v1beta1.FeatureMap.FloatList.verify|verify} messages.
                         * @param message FloatList message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.recommendationengine.v1beta1.FeatureMap.IFloatList, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified FloatList message, length delimited. Does not implicitly {@link google.cloud.recommendationengine.v1beta1.FeatureMap.FloatList.verify|verify} messages.
                         * @param message FloatList message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.recommendationengine.v1beta1.FeatureMap.IFloatList, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a FloatList message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns FloatList
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommendationengine.v1beta1.FeatureMap.FloatList;

                        /**
                         * Decodes a FloatList message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns FloatList
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommendationengine.v1beta1.FeatureMap.FloatList;

                        /**
                         * Verifies a FloatList message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a FloatList message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns FloatList
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.recommendationengine.v1beta1.FeatureMap.FloatList;

                        /**
                         * Creates a plain object from a FloatList message. Also converts values to other types if specified.
                         * @param message FloatList
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.recommendationengine.v1beta1.FeatureMap.FloatList, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this FloatList to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Represents a CatalogService */
                class CatalogService extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new CatalogService service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new CatalogService service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): CatalogService;

                    /**
                     * Calls CreateCatalogItem.
                     * @param request CreateCatalogItemRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and CatalogItem
                     */
                    public createCatalogItem(request: google.cloud.recommendationengine.v1beta1.ICreateCatalogItemRequest, callback: google.cloud.recommendationengine.v1beta1.CatalogService.CreateCatalogItemCallback): void;

                    /**
                     * Calls CreateCatalogItem.
                     * @param request CreateCatalogItemRequest message or plain object
                     * @returns Promise
                     */
                    public createCatalogItem(request: google.cloud.recommendationengine.v1beta1.ICreateCatalogItemRequest): Promise<google.cloud.recommendationengine.v1beta1.CatalogItem>;

                    /**
                     * Calls GetCatalogItem.
                     * @param request GetCatalogItemRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and CatalogItem
                     */
                    public getCatalogItem(request: google.cloud.recommendationengine.v1beta1.IGetCatalogItemRequest, callback: google.cloud.recommendationengine.v1beta1.CatalogService.GetCatalogItemCallback): void;

                    /**
                     * Calls GetCatalogItem.
                     * @param request GetCatalogItemRequest message or plain object
                     * @returns Promise
                     */
                    public getCatalogItem(request: google.cloud.recommendationengine.v1beta1.IGetCatalogItemRequest): Promise<google.cloud.recommendationengine.v1beta1.CatalogItem>;

                    /**
                     * Calls ListCatalogItems.
                     * @param request ListCatalogItemsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListCatalogItemsResponse
                     */
                    public listCatalogItems(request: google.cloud.recommendationengine.v1beta1.IListCatalogItemsRequest, callback: google.cloud.recommendationengine.v1beta1.CatalogService.ListCatalogItemsCallback): void;

                    /**
                     * Calls ListCatalogItems.
                     * @param request ListCatalogItemsRequest message or plain object
                     * @returns Promise
                     */
                    public listCatalogItems(request: google.cloud.recommendationengine.v1beta1.IListCatalogItemsRequest): Promise<google.cloud.recommendationengine.v1beta1.ListCatalogItemsResponse>;

                    /**
                     * Calls UpdateCatalogItem.
                     * @param request UpdateCatalogItemRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and CatalogItem
                     */
                    public updateCatalogItem(request: google.cloud.recommendationengine.v1beta1.IUpdateCatalogItemRequest, callback: google.cloud.recommendationengine.v1beta1.CatalogService.UpdateCatalogItemCallback): void;

                    /**
                     * Calls UpdateCatalogItem.
                     * @param request UpdateCatalogItemRequest message or plain object
                     * @returns Promise
                     */
                    public updateCatalogItem(request: google.cloud.recommendationengine.v1beta1.IUpdateCatalogItemRequest): Promise<google.cloud.recommendationengine.v1beta1.CatalogItem>;

                    /**
                     * Calls DeleteCatalogItem.
                     * @param request DeleteCatalogItemRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deleteCatalogItem(request: google.cloud.recommendationengine.v1beta1.IDeleteCatalogItemRequest, callback: google.cloud.recommendationengine.v1beta1.CatalogService.DeleteCatalogItemCallback): void;

                    /**
                     * Calls DeleteCatalogItem.
                     * @param request DeleteCatalogItemRequest message or plain object
                     * @returns Promise
                     */
                    public deleteCatalogItem(request: google.cloud.recommendationengine.v1beta1.IDeleteCatalogItemRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls ImportCatalogItems.
                     * @param request ImportCatalogItemsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public importCatalogItems(request: google.cloud.recommendationengine.v1beta1.IImportCatalogItemsRequest, callback: google.cloud.recommendationengine.v1beta1.CatalogService.ImportCatalogItemsCallback): void;

                    /**
                     * Calls ImportCatalogItems.
                     * @param request ImportCatalogItemsRequest message or plain object
                     * @returns Promise
                     */
                    public importCatalogItems(request: google.cloud.recommendationengine.v1beta1.IImportCatalogItemsRequest): Promise<google.longrunning.Operation>;
                }

                namespace CatalogService {

                    /**
                     * Callback as used by {@link google.cloud.recommendationengine.v1beta1.CatalogService#createCatalogItem}.
                     * @param error Error, if any
                     * @param [response] CatalogItem
                     */
                    type CreateCatalogItemCallback = (error: (Error|null), response?: google.cloud.recommendationengine.v1beta1.CatalogItem) => void;

                    /**
                     * Callback as used by {@link google.cloud.recommendationengine.v1beta1.CatalogService#getCatalogItem}.
                     * @param error Error, if any
                     * @param [response] CatalogItem
                     */
                    type GetCatalogItemCallback = (error: (Error|null), response?: google.cloud.recommendationengine.v1beta1.CatalogItem) => void;

                    /**
                     * Callback as used by {@link google.cloud.recommendationengine.v1beta1.CatalogService#listCatalogItems}.
                     * @param error Error, if any
                     * @param [response] ListCatalogItemsResponse
                     */
                    type ListCatalogItemsCallback = (error: (Error|null), response?: google.cloud.recommendationengine.v1beta1.ListCatalogItemsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.recommendationengine.v1beta1.CatalogService#updateCatalogItem}.
                     * @param error Error, if any
                     * @param [response] CatalogItem
                     */
                    type UpdateCatalogItemCallback = (error: (Error|null), response?: google.cloud.recommendationengine.v1beta1.CatalogItem) => void;

                    /**
                     * Callback as used by {@link google.cloud.recommendationengine.v1beta1.CatalogService#deleteCatalogItem}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeleteCatalogItemCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.cloud.recommendationengine.v1beta1.CatalogService#importCatalogItems}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type ImportCatalogItemsCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;
                }

                /** Properties of a CreateCatalogItemRequest. */
                interface ICreateCatalogItemRequest {

                    /** CreateCatalogItemRequest parent */
                    parent?: (string|null);

                    /** CreateCatalogItemRequest catalogItem */
                    catalogItem?: (google.cloud.recommendationengine.v1beta1.ICatalogItem|null);
                }

                /** Represents a CreateCatalogItemRequest. */
                class CreateCatalogItemRequest implements ICreateCatalogItemRequest {

                    /**
                     * Constructs a new CreateCatalogItemRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recommendationengine.v1beta1.ICreateCatalogItemRequest);

                    /** CreateCatalogItemRequest parent. */
                    public parent: string;

                    /** CreateCatalogItemRequest catalogItem. */
                    public catalogItem?: (google.cloud.recommendationengine.v1beta1.ICatalogItem|null);

                    /**
                     * Creates a new CreateCatalogItemRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateCatalogItemRequest instance
                     */
                    public static create(properties?: google.cloud.recommendationengine.v1beta1.ICreateCatalogItemRequest): google.cloud.recommendationengine.v1beta1.CreateCatalogItemRequest;

                    /**
                     * Encodes the specified CreateCatalogItemRequest message. Does not implicitly {@link google.cloud.recommendationengine.v1beta1.CreateCatalogItemRequest.verify|verify} messages.
                     * @param message CreateCatalogItemRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recommendationengine.v1beta1.ICreateCatalogItemRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateCatalogItemRequest message, length delimited. Does not implicitly {@link google.cloud.recommendationengine.v1beta1.CreateCatalogItemRequest.verify|verify} messages.
                     * @param message CreateCatalogItemRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recommendationengine.v1beta1.ICreateCatalogItemRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateCatalogItemRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateCatalogItemRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommendationengine.v1beta1.CreateCatalogItemRequest;

                    /**
                     * Decodes a CreateCatalogItemRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateCatalogItemRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommendationengine.v1beta1.CreateCatalogItemRequest;

                    /**
                     * Verifies a CreateCatalogItemRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateCatalogItemRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateCatalogItemRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recommendationengine.v1beta1.CreateCatalogItemRequest;

                    /**
                     * Creates a plain object from a CreateCatalogItemRequest message. Also converts values to other types if specified.
                     * @param message CreateCatalogItemRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recommendationengine.v1beta1.CreateCatalogItemRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateCatalogItemRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetCatalogItemRequest. */
                interface IGetCatalogItemRequest {

                    /** GetCatalogItemRequest name */
                    name?: (string|null);
                }

                /** Represents a GetCatalogItemRequest. */
                class GetCatalogItemRequest implements IGetCatalogItemRequest {

                    /**
                     * Constructs a new GetCatalogItemRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recommendationengine.v1beta1.IGetCatalogItemRequest);

                    /** GetCatalogItemRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetCatalogItemRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetCatalogItemRequest instance
                     */
                    public static create(properties?: google.cloud.recommendationengine.v1beta1.IGetCatalogItemRequest): google.cloud.recommendationengine.v1beta1.GetCatalogItemRequest;

                    /**
                     * Encodes the specified GetCatalogItemRequest message. Does not implicitly {@link google.cloud.recommendationengine.v1beta1.GetCatalogItemRequest.verify|verify} messages.
                     * @param message GetCatalogItemRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recommendationengine.v1beta1.IGetCatalogItemRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetCatalogItemRequest message, length delimited. Does not implicitly {@link google.cloud.recommendationengine.v1beta1.GetCatalogItemRequest.verify|verify} messages.
                     * @param message GetCatalogItemRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recommendationengine.v1beta1.IGetCatalogItemRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetCatalogItemRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetCatalogItemRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommendationengine.v1beta1.GetCatalogItemRequest;

                    /**
                     * Decodes a GetCatalogItemRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetCatalogItemRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommendationengine.v1beta1.GetCatalogItemRequest;

                    /**
                     * Verifies a GetCatalogItemRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetCatalogItemRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetCatalogItemRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recommendationengine.v1beta1.GetCatalogItemRequest;

                    /**
                     * Creates a plain object from a GetCatalogItemRequest message. Also converts values to other types if specified.
                     * @param message GetCatalogItemRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recommendationengine.v1beta1.GetCatalogItemRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetCatalogItemRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListCatalogItemsRequest. */
                interface IListCatalogItemsRequest {

                    /** ListCatalogItemsRequest parent */
                    parent?: (string|null);

                    /** ListCatalogItemsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListCatalogItemsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListCatalogItemsRequest filter */
                    filter?: (string|null);
                }

                /** Represents a ListCatalogItemsRequest. */
                class ListCatalogItemsRequest implements IListCatalogItemsRequest {

                    /**
                     * Constructs a new ListCatalogItemsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recommendationengine.v1beta1.IListCatalogItemsRequest);

                    /** ListCatalogItemsRequest parent. */
                    public parent: string;

                    /** ListCatalogItemsRequest pageSize. */
                    public pageSize: number;

                    /** ListCatalogItemsRequest pageToken. */
                    public pageToken: string;

                    /** ListCatalogItemsRequest filter. */
                    public filter: string;

                    /**
                     * Creates a new ListCatalogItemsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListCatalogItemsRequest instance
                     */
                    public static create(properties?: google.cloud.recommendationengine.v1beta1.IListCatalogItemsRequest): google.cloud.recommendationengine.v1beta1.ListCatalogItemsRequest;

                    /**
                     * Encodes the specified ListCatalogItemsRequest message. Does not implicitly {@link google.cloud.recommendationengine.v1beta1.ListCatalogItemsRequest.verify|verify} messages.
                     * @param message ListCatalogItemsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recommendationengine.v1beta1.IListCatalogItemsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListCatalogItemsRequest message, length delimited. Does not implicitly {@link google.cloud.recommendationengine.v1beta1.ListCatalogItemsRequest.verify|verify} messages.
                     * @param message ListCatalogItemsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recommendationengine.v1beta1.IListCatalogItemsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListCatalogItemsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListCatalogItemsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommendationengine.v1beta1.ListCatalogItemsRequest;

                    /**
                     * Decodes a ListCatalogItemsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListCatalogItemsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommendationengine.v1beta1.ListCatalogItemsRequest;

                    /**
                     * Verifies a ListCatalogItemsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListCatalogItemsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListCatalogItemsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recommendationengine.v1beta1.ListCatalogItemsRequest;

                    /**
                     * Creates a plain object from a ListCatalogItemsRequest message. Also converts values to other types if specified.
                     * @param message ListCatalogItemsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recommendationengine.v1beta1.ListCatalogItemsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListCatalogItemsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListCatalogItemsResponse. */
                interface IListCatalogItemsResponse {

                    /** ListCatalogItemsResponse catalogItems */
                    catalogItems?: (google.cloud.recommendationengine.v1beta1.ICatalogItem[]|null);

                    /** ListCatalogItemsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListCatalogItemsResponse. */
                class ListCatalogItemsResponse implements IListCatalogItemsResponse {

                    /**
                     * Constructs a new ListCatalogItemsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recommendationengine.v1beta1.IListCatalogItemsResponse);

                    /** ListCatalogItemsResponse catalogItems. */
                    public catalogItems: google.cloud.recommendationengine.v1beta1.ICatalogItem[];

                    /** ListCatalogItemsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListCatalogItemsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListCatalogItemsResponse instance
                     */
                    public static create(properties?: google.cloud.recommendationengine.v1beta1.IListCatalogItemsResponse): google.cloud.recommendationengine.v1beta1.ListCatalogItemsResponse;

                    /**
                     * Encodes the specified ListCatalogItemsResponse message. Does not implicitly {@link google.cloud.recommendationengine.v1beta1.ListCatalogItemsResponse.verify|verify} messages.
                     * @param message ListCatalogItemsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recommendationengine.v1beta1.IListCatalogItemsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListCatalogItemsResponse message, length delimited. Does not implicitly {@link google.cloud.recommendationengine.v1beta1.ListCatalogItemsResponse.verify|verify} messages.
                     * @param message ListCatalogItemsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recommendationengine.v1beta1.IListCatalogItemsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListCatalogItemsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListCatalogItemsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommendationengine.v1beta1.ListCatalogItemsResponse;

                    /**
                     * Decodes a ListCatalogItemsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListCatalogItemsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommendationengine.v1beta1.ListCatalogItemsResponse;

                    /**
                     * Verifies a ListCatalogItemsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListCatalogItemsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListCatalogItemsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recommendationengine.v1beta1.ListCatalogItemsResponse;

                    /**
                     * Creates a plain object from a ListCatalogItemsResponse message. Also converts values to other types if specified.
                     * @param message ListCatalogItemsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recommendationengine.v1beta1.ListCatalogItemsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListCatalogItemsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UpdateCatalogItemRequest. */
                interface IUpdateCatalogItemRequest {

                    /** UpdateCatalogItemRequest name */
                    name?: (string|null);

                    /** UpdateCatalogItemRequest catalogItem */
                    catalogItem?: (google.cloud.recommendationengine.v1beta1.ICatalogItem|null);

                    /** UpdateCatalogItemRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateCatalogItemRequest. */
                class UpdateCatalogItemRequest implements IUpdateCatalogItemRequest {

                    /**
                     * Constructs a new UpdateCatalogItemRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recommendationengine.v1beta1.IUpdateCatalogItemRequest);

                    /** UpdateCatalogItemRequest name. */
                    public name: string;

                    /** UpdateCatalogItemRequest catalogItem. */
                    public catalogItem?: (google.cloud.recommendationengine.v1beta1.ICatalogItem|null);

                    /** UpdateCatalogItemRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateCatalogItemRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateCatalogItemRequest instance
                     */
                    public static create(properties?: google.cloud.recommendationengine.v1beta1.IUpdateCatalogItemRequest): google.cloud.recommendationengine.v1beta1.UpdateCatalogItemRequest;

                    /**
                     * Encodes the specified UpdateCatalogItemRequest message. Does not implicitly {@link google.cloud.recommendationengine.v1beta1.UpdateCatalogItemRequest.verify|verify} messages.
                     * @param message UpdateCatalogItemRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recommendationengine.v1beta1.IUpdateCatalogItemRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateCatalogItemRequest message, length delimited. Does not implicitly {@link google.cloud.recommendationengine.v1beta1.UpdateCatalogItemRequest.verify|verify} messages.
                     * @param message UpdateCatalogItemRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recommendationengine.v1beta1.IUpdateCatalogItemRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateCatalogItemRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateCatalogItemRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommendationengine.v1beta1.UpdateCatalogItemRequest;

                    /**
                     * Decodes an UpdateCatalogItemRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateCatalogItemRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommendationengine.v1beta1.UpdateCatalogItemRequest;

                    /**
                     * Verifies an UpdateCatalogItemRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateCatalogItemRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateCatalogItemRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recommendationengine.v1beta1.UpdateCatalogItemRequest;

                    /**
                     * Creates a plain object from an UpdateCatalogItemRequest message. Also converts values to other types if specified.
                     * @param message UpdateCatalogItemRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recommendationengine.v1beta1.UpdateCatalogItemRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateCatalogItemRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteCatalogItemRequest. */
                interface IDeleteCatalogItemRequest {

                    /** DeleteCatalogItemRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteCatalogItemRequest. */
                class DeleteCatalogItemRequest implements IDeleteCatalogItemRequest {

                    /**
                     * Constructs a new DeleteCatalogItemRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recommendationengine.v1beta1.IDeleteCatalogItemRequest);

                    /** DeleteCatalogItemRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteCatalogItemRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteCatalogItemRequest instance
                     */
                    public static create(properties?: google.cloud.recommendationengine.v1beta1.IDeleteCatalogItemRequest): google.cloud.recommendationengine.v1beta1.DeleteCatalogItemRequest;

                    /**
                     * Encodes the specified DeleteCatalogItemRequest message. Does not implicitly {@link google.cloud.recommendationengine.v1beta1.DeleteCatalogItemRequest.verify|verify} messages.
                     * @param message DeleteCatalogItemRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recommendationengine.v1beta1.IDeleteCatalogItemRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteCatalogItemRequest message, length delimited. Does not implicitly {@link google.cloud.recommendationengine.v1beta1.DeleteCatalogItemRequest.verify|verify} messages.
                     * @param message DeleteCatalogItemRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recommendationengine.v1beta1.IDeleteCatalogItemRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteCatalogItemRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteCatalogItemRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommendationengine.v1beta1.DeleteCatalogItemRequest;

                    /**
                     * Decodes a DeleteCatalogItemRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteCatalogItemRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommendationengine.v1beta1.DeleteCatalogItemRequest;

                    /**
                     * Verifies a DeleteCatalogItemRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteCatalogItemRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteCatalogItemRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recommendationengine.v1beta1.DeleteCatalogItemRequest;

                    /**
                     * Creates a plain object from a DeleteCatalogItemRequest message. Also converts values to other types if specified.
                     * @param message DeleteCatalogItemRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recommendationengine.v1beta1.DeleteCatalogItemRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteCatalogItemRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GcsSource. */
                interface IGcsSource {

                    /** GcsSource inputUris */
                    inputUris?: (string[]|null);
                }

                /** Represents a GcsSource. */
                class GcsSource implements IGcsSource {

                    /**
                     * Constructs a new GcsSource.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recommendationengine.v1beta1.IGcsSource);

                    /** GcsSource inputUris. */
                    public inputUris: string[];

                    /**
                     * Creates a new GcsSource instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GcsSource instance
                     */
                    public static create(properties?: google.cloud.recommendationengine.v1beta1.IGcsSource): google.cloud.recommendationengine.v1beta1.GcsSource;

                    /**
                     * Encodes the specified GcsSource message. Does not implicitly {@link google.cloud.recommendationengine.v1beta1.GcsSource.verify|verify} messages.
                     * @param message GcsSource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recommendationengine.v1beta1.IGcsSource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GcsSource message, length delimited. Does not implicitly {@link google.cloud.recommendationengine.v1beta1.GcsSource.verify|verify} messages.
                     * @param message GcsSource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recommendationengine.v1beta1.IGcsSource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GcsSource message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GcsSource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommendationengine.v1beta1.GcsSource;

                    /**
                     * Decodes a GcsSource message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GcsSource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommendationengine.v1beta1.GcsSource;

                    /**
                     * Verifies a GcsSource message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GcsSource message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GcsSource
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recommendationengine.v1beta1.GcsSource;

                    /**
                     * Creates a plain object from a GcsSource message. Also converts values to other types if specified.
                     * @param message GcsSource
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recommendationengine.v1beta1.GcsSource, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GcsSource to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CatalogInlineSource. */
                interface ICatalogInlineSource {

                    /** CatalogInlineSource catalogItems */
                    catalogItems?: (google.cloud.recommendationengine.v1beta1.ICatalogItem[]|null);
                }

                /** Represents a CatalogInlineSource. */
                class CatalogInlineSource implements ICatalogInlineSource {

                    /**
                     * Constructs a new CatalogInlineSource.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recommendationengine.v1beta1.ICatalogInlineSource);

                    /** CatalogInlineSource catalogItems. */
                    public catalogItems: google.cloud.recommendationengine.v1beta1.ICatalogItem[];

                    /**
                     * Creates a new CatalogInlineSource instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CatalogInlineSource instance
                     */
                    public static create(properties?: google.cloud.recommendationengine.v1beta1.ICatalogInlineSource): google.cloud.recommendationengine.v1beta1.CatalogInlineSource;

                    /**
                     * Encodes the specified CatalogInlineSource message. Does not implicitly {@link google.cloud.recommendationengine.v1beta1.CatalogInlineSource.verify|verify} messages.
                     * @param message CatalogInlineSource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recommendationengine.v1beta1.ICatalogInlineSource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CatalogInlineSource message, length delimited. Does not implicitly {@link google.cloud.recommendationengine.v1beta1.CatalogInlineSource.verify|verify} messages.
                     * @param message CatalogInlineSource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recommendationengine.v1beta1.ICatalogInlineSource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CatalogInlineSource message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CatalogInlineSource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommendationengine.v1beta1.CatalogInlineSource;

                    /**
                     * Decodes a CatalogInlineSource message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CatalogInlineSource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommendationengine.v1beta1.CatalogInlineSource;

                    /**
                     * Verifies a CatalogInlineSource message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CatalogInlineSource message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CatalogInlineSource
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recommendationengine.v1beta1.CatalogInlineSource;

                    /**
                     * Creates a plain object from a CatalogInlineSource message. Also converts values to other types if specified.
                     * @param message CatalogInlineSource
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recommendationengine.v1beta1.CatalogInlineSource, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CatalogInlineSource to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a UserEventInlineSource. */
                interface IUserEventInlineSource {

                    /** UserEventInlineSource userEvents */
                    userEvents?: (google.cloud.recommendationengine.v1beta1.IUserEvent[]|null);
                }

                /** Represents a UserEventInlineSource. */
                class UserEventInlineSource implements IUserEventInlineSource {

                    /**
                     * Constructs a new UserEventInlineSource.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recommendationengine.v1beta1.IUserEventInlineSource);

                    /** UserEventInlineSource userEvents. */
                    public userEvents: google.cloud.recommendationengine.v1beta1.IUserEvent[];

                    /**
                     * Creates a new UserEventInlineSource instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UserEventInlineSource instance
                     */
                    public static create(properties?: google.cloud.recommendationengine.v1beta1.IUserEventInlineSource): google.cloud.recommendationengine.v1beta1.UserEventInlineSource;

                    /**
                     * Encodes the specified UserEventInlineSource message. Does not implicitly {@link google.cloud.recommendationengine.v1beta1.UserEventInlineSource.verify|verify} messages.
                     * @param message UserEventInlineSource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recommendationengine.v1beta1.IUserEventInlineSource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UserEventInlineSource message, length delimited. Does not implicitly {@link google.cloud.recommendationengine.v1beta1.UserEventInlineSource.verify|verify} messages.
                     * @param message UserEventInlineSource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recommendationengine.v1beta1.IUserEventInlineSource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a UserEventInlineSource message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UserEventInlineSource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommendationengine.v1beta1.UserEventInlineSource;

                    /**
                     * Decodes a UserEventInlineSource message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UserEventInlineSource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommendationengine.v1beta1.UserEventInlineSource;

                    /**
                     * Verifies a UserEventInlineSource message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a UserEventInlineSource message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UserEventInlineSource
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recommendationengine.v1beta1.UserEventInlineSource;

                    /**
                     * Creates a plain object from a UserEventInlineSource message. Also converts values to other types if specified.
                     * @param message UserEventInlineSource
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recommendationengine.v1beta1.UserEventInlineSource, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UserEventInlineSource to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an ImportErrorsConfig. */
                interface IImportErrorsConfig {

                    /** ImportErrorsConfig gcsPrefix */
                    gcsPrefix?: (string|null);
                }

                /** Represents an ImportErrorsConfig. */
                class ImportErrorsConfig implements IImportErrorsConfig {

                    /**
                     * Constructs a new ImportErrorsConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recommendationengine.v1beta1.IImportErrorsConfig);

                    /** ImportErrorsConfig gcsPrefix. */
                    public gcsPrefix: string;

                    /** ImportErrorsConfig destination. */
                    public destination?: "gcsPrefix";

                    /**
                     * Creates a new ImportErrorsConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ImportErrorsConfig instance
                     */
                    public static create(properties?: google.cloud.recommendationengine.v1beta1.IImportErrorsConfig): google.cloud.recommendationengine.v1beta1.ImportErrorsConfig;

                    /**
                     * Encodes the specified ImportErrorsConfig message. Does not implicitly {@link google.cloud.recommendationengine.v1beta1.ImportErrorsConfig.verify|verify} messages.
                     * @param message ImportErrorsConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recommendationengine.v1beta1.IImportErrorsConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ImportErrorsConfig message, length delimited. Does not implicitly {@link google.cloud.recommendationengine.v1beta1.ImportErrorsConfig.verify|verify} messages.
                     * @param message ImportErrorsConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recommendationengine.v1beta1.IImportErrorsConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ImportErrorsConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ImportErrorsConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommendationengine.v1beta1.ImportErrorsConfig;

                    /**
                     * Decodes an ImportErrorsConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ImportErrorsConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommendationengine.v1beta1.ImportErrorsConfig;

                    /**
                     * Verifies an ImportErrorsConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ImportErrorsConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ImportErrorsConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recommendationengine.v1beta1.ImportErrorsConfig;

                    /**
                     * Creates a plain object from an ImportErrorsConfig message. Also converts values to other types if specified.
                     * @param message ImportErrorsConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recommendationengine.v1beta1.ImportErrorsConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ImportErrorsConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an ImportCatalogItemsRequest. */
                interface IImportCatalogItemsRequest {

                    /** ImportCatalogItemsRequest parent */
                    parent?: (string|null);

                    /** ImportCatalogItemsRequest requestId */
                    requestId?: (string|null);

                    /** ImportCatalogItemsRequest inputConfig */
                    inputConfig?: (google.cloud.recommendationengine.v1beta1.IInputConfig|null);

                    /** ImportCatalogItemsRequest errorsConfig */
                    errorsConfig?: (google.cloud.recommendationengine.v1beta1.IImportErrorsConfig|null);
                }

                /** Represents an ImportCatalogItemsRequest. */
                class ImportCatalogItemsRequest implements IImportCatalogItemsRequest {

                    /**
                     * Constructs a new ImportCatalogItemsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recommendationengine.v1beta1.IImportCatalogItemsRequest);

                    /** ImportCatalogItemsRequest parent. */
                    public parent: string;

                    /** ImportCatalogItemsRequest requestId. */
                    public requestId: string;

                    /** ImportCatalogItemsRequest inputConfig. */
                    public inputConfig?: (google.cloud.recommendationengine.v1beta1.IInputConfig|null);

                    /** ImportCatalogItemsRequest errorsConfig. */
                    public errorsConfig?: (google.cloud.recommendationengine.v1beta1.IImportErrorsConfig|null);

                    /**
                     * Creates a new ImportCatalogItemsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ImportCatalogItemsRequest instance
                     */
                    public static create(properties?: google.cloud.recommendationengine.v1beta1.IImportCatalogItemsRequest): google.cloud.recommendationengine.v1beta1.ImportCatalogItemsRequest;

                    /**
                     * Encodes the specified ImportCatalogItemsRequest message. Does not implicitly {@link google.cloud.recommendationengine.v1beta1.ImportCatalogItemsRequest.verify|verify} messages.
                     * @param message ImportCatalogItemsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recommendationengine.v1beta1.IImportCatalogItemsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ImportCatalogItemsRequest message, length delimited. Does not implicitly {@link google.cloud.recommendationengine.v1beta1.ImportCatalogItemsRequest.verify|verify} messages.
                     * @param message ImportCatalogItemsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recommendationengine.v1beta1.IImportCatalogItemsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ImportCatalogItemsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ImportCatalogItemsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommendationengine.v1beta1.ImportCatalogItemsRequest;

                    /**
                     * Decodes an ImportCatalogItemsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ImportCatalogItemsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommendationengine.v1beta1.ImportCatalogItemsRequest;

                    /**
                     * Verifies an ImportCatalogItemsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ImportCatalogItemsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ImportCatalogItemsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recommendationengine.v1beta1.ImportCatalogItemsRequest;

                    /**
                     * Creates a plain object from an ImportCatalogItemsRequest message. Also converts values to other types if specified.
                     * @param message ImportCatalogItemsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recommendationengine.v1beta1.ImportCatalogItemsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ImportCatalogItemsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an ImportUserEventsRequest. */
                interface IImportUserEventsRequest {

                    /** ImportUserEventsRequest parent */
                    parent?: (string|null);

                    /** ImportUserEventsRequest requestId */
                    requestId?: (string|null);

                    /** ImportUserEventsRequest inputConfig */
                    inputConfig?: (google.cloud.recommendationengine.v1beta1.IInputConfig|null);

                    /** ImportUserEventsRequest errorsConfig */
                    errorsConfig?: (google.cloud.recommendationengine.v1beta1.IImportErrorsConfig|null);
                }

                /** Represents an ImportUserEventsRequest. */
                class ImportUserEventsRequest implements IImportUserEventsRequest {

                    /**
                     * Constructs a new ImportUserEventsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recommendationengine.v1beta1.IImportUserEventsRequest);

                    /** ImportUserEventsRequest parent. */
                    public parent: string;

                    /** ImportUserEventsRequest requestId. */
                    public requestId: string;

                    /** ImportUserEventsRequest inputConfig. */
                    public inputConfig?: (google.cloud.recommendationengine.v1beta1.IInputConfig|null);

                    /** ImportUserEventsRequest errorsConfig. */
                    public errorsConfig?: (google.cloud.recommendationengine.v1beta1.IImportErrorsConfig|null);

                    /**
                     * Creates a new ImportUserEventsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ImportUserEventsRequest instance
                     */
                    public static create(properties?: google.cloud.recommendationengine.v1beta1.IImportUserEventsRequest): google.cloud.recommendationengine.v1beta1.ImportUserEventsRequest;

                    /**
                     * Encodes the specified ImportUserEventsRequest message. Does not implicitly {@link google.cloud.recommendationengine.v1beta1.ImportUserEventsRequest.verify|verify} messages.
                     * @param message ImportUserEventsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recommendationengine.v1beta1.IImportUserEventsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ImportUserEventsRequest message, length delimited. Does not implicitly {@link google.cloud.recommendationengine.v1beta1.ImportUserEventsRequest.verify|verify} messages.
                     * @param message ImportUserEventsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recommendationengine.v1beta1.IImportUserEventsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ImportUserEventsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ImportUserEventsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommendationengine.v1beta1.ImportUserEventsRequest;

                    /**
                     * Decodes an ImportUserEventsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ImportUserEventsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommendationengine.v1beta1.ImportUserEventsRequest;

                    /**
                     * Verifies an ImportUserEventsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ImportUserEventsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ImportUserEventsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recommendationengine.v1beta1.ImportUserEventsRequest;

                    /**
                     * Creates a plain object from an ImportUserEventsRequest message. Also converts values to other types if specified.
                     * @param message ImportUserEventsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recommendationengine.v1beta1.ImportUserEventsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ImportUserEventsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an InputConfig. */
                interface IInputConfig {

                    /** InputConfig catalogInlineSource */
                    catalogInlineSource?: (google.cloud.recommendationengine.v1beta1.ICatalogInlineSource|null);

                    /** InputConfig gcsSource */
                    gcsSource?: (google.cloud.recommendationengine.v1beta1.IGcsSource|null);

                    /** InputConfig userEventInlineSource */
                    userEventInlineSource?: (google.cloud.recommendationengine.v1beta1.IUserEventInlineSource|null);
                }

                /** Represents an InputConfig. */
                class InputConfig implements IInputConfig {

                    /**
                     * Constructs a new InputConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recommendationengine.v1beta1.IInputConfig);

                    /** InputConfig catalogInlineSource. */
                    public catalogInlineSource?: (google.cloud.recommendationengine.v1beta1.ICatalogInlineSource|null);

                    /** InputConfig gcsSource. */
                    public gcsSource?: (google.cloud.recommendationengine.v1beta1.IGcsSource|null);

                    /** InputConfig userEventInlineSource. */
                    public userEventInlineSource?: (google.cloud.recommendationengine.v1beta1.IUserEventInlineSource|null);

                    /** InputConfig source. */
                    public source?: ("catalogInlineSource"|"gcsSource"|"userEventInlineSource");

                    /**
                     * Creates a new InputConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns InputConfig instance
                     */
                    public static create(properties?: google.cloud.recommendationengine.v1beta1.IInputConfig): google.cloud.recommendationengine.v1beta1.InputConfig;

                    /**
                     * Encodes the specified InputConfig message. Does not implicitly {@link google.cloud.recommendationengine.v1beta1.InputConfig.verify|verify} messages.
                     * @param message InputConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recommendationengine.v1beta1.IInputConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified InputConfig message, length delimited. Does not implicitly {@link google.cloud.recommendationengine.v1beta1.InputConfig.verify|verify} messages.
                     * @param message InputConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recommendationengine.v1beta1.IInputConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an InputConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns InputConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommendationengine.v1beta1.InputConfig;

                    /**
                     * Decodes an InputConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns InputConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommendationengine.v1beta1.InputConfig;

                    /**
                     * Verifies an InputConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an InputConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns InputConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recommendationengine.v1beta1.InputConfig;

                    /**
                     * Creates a plain object from an InputConfig message. Also converts values to other types if specified.
                     * @param message InputConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recommendationengine.v1beta1.InputConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this InputConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an ImportMetadata. */
                interface IImportMetadata {

                    /** ImportMetadata operationName */
                    operationName?: (string|null);

                    /** ImportMetadata requestId */
                    requestId?: (string|null);

                    /** ImportMetadata createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** ImportMetadata successCount */
                    successCount?: (number|Long|string|null);

                    /** ImportMetadata failureCount */
                    failureCount?: (number|Long|string|null);

                    /** ImportMetadata updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents an ImportMetadata. */
                class ImportMetadata implements IImportMetadata {

                    /**
                     * Constructs a new ImportMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recommendationengine.v1beta1.IImportMetadata);

                    /** ImportMetadata operationName. */
                    public operationName: string;

                    /** ImportMetadata requestId. */
                    public requestId: string;

                    /** ImportMetadata createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** ImportMetadata successCount. */
                    public successCount: (number|Long|string);

                    /** ImportMetadata failureCount. */
                    public failureCount: (number|Long|string);

                    /** ImportMetadata updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new ImportMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ImportMetadata instance
                     */
                    public static create(properties?: google.cloud.recommendationengine.v1beta1.IImportMetadata): google.cloud.recommendationengine.v1beta1.ImportMetadata;

                    /**
                     * Encodes the specified ImportMetadata message. Does not implicitly {@link google.cloud.recommendationengine.v1beta1.ImportMetadata.verify|verify} messages.
                     * @param message ImportMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recommendationengine.v1beta1.IImportMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ImportMetadata message, length delimited. Does not implicitly {@link google.cloud.recommendationengine.v1beta1.ImportMetadata.verify|verify} messages.
                     * @param message ImportMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recommendationengine.v1beta1.IImportMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ImportMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ImportMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommendationengine.v1beta1.ImportMetadata;

                    /**
                     * Decodes an ImportMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ImportMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommendationengine.v1beta1.ImportMetadata;

                    /**
                     * Verifies an ImportMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ImportMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ImportMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recommendationengine.v1beta1.ImportMetadata;

                    /**
                     * Creates a plain object from an ImportMetadata message. Also converts values to other types if specified.
                     * @param message ImportMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recommendationengine.v1beta1.ImportMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ImportMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an ImportCatalogItemsResponse. */
                interface IImportCatalogItemsResponse {

                    /** ImportCatalogItemsResponse errorSamples */
                    errorSamples?: (google.rpc.IStatus[]|null);

                    /** ImportCatalogItemsResponse errorsConfig */
                    errorsConfig?: (google.cloud.recommendationengine.v1beta1.IImportErrorsConfig|null);
                }

                /** Represents an ImportCatalogItemsResponse. */
                class ImportCatalogItemsResponse implements IImportCatalogItemsResponse {

                    /**
                     * Constructs a new ImportCatalogItemsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recommendationengine.v1beta1.IImportCatalogItemsResponse);

                    /** ImportCatalogItemsResponse errorSamples. */
                    public errorSamples: google.rpc.IStatus[];

                    /** ImportCatalogItemsResponse errorsConfig. */
                    public errorsConfig?: (google.cloud.recommendationengine.v1beta1.IImportErrorsConfig|null);

                    /**
                     * Creates a new ImportCatalogItemsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ImportCatalogItemsResponse instance
                     */
                    public static create(properties?: google.cloud.recommendationengine.v1beta1.IImportCatalogItemsResponse): google.cloud.recommendationengine.v1beta1.ImportCatalogItemsResponse;

                    /**
                     * Encodes the specified ImportCatalogItemsResponse message. Does not implicitly {@link google.cloud.recommendationengine.v1beta1.ImportCatalogItemsResponse.verify|verify} messages.
                     * @param message ImportCatalogItemsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recommendationengine.v1beta1.IImportCatalogItemsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ImportCatalogItemsResponse message, length delimited. Does not implicitly {@link google.cloud.recommendationengine.v1beta1.ImportCatalogItemsResponse.verify|verify} messages.
                     * @param message ImportCatalogItemsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recommendationengine.v1beta1.IImportCatalogItemsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ImportCatalogItemsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ImportCatalogItemsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommendationengine.v1beta1.ImportCatalogItemsResponse;

                    /**
                     * Decodes an ImportCatalogItemsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ImportCatalogItemsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommendationengine.v1beta1.ImportCatalogItemsResponse;

                    /**
                     * Verifies an ImportCatalogItemsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ImportCatalogItemsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ImportCatalogItemsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recommendationengine.v1beta1.ImportCatalogItemsResponse;

                    /**
                     * Creates a plain object from an ImportCatalogItemsResponse message. Also converts values to other types if specified.
                     * @param message ImportCatalogItemsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recommendationengine.v1beta1.ImportCatalogItemsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ImportCatalogItemsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an ImportUserEventsResponse. */
                interface IImportUserEventsResponse {

                    /** ImportUserEventsResponse errorSamples */
                    errorSamples?: (google.rpc.IStatus[]|null);

                    /** ImportUserEventsResponse errorsConfig */
                    errorsConfig?: (google.cloud.recommendationengine.v1beta1.IImportErrorsConfig|null);

                    /** ImportUserEventsResponse importSummary */
                    importSummary?: (google.cloud.recommendationengine.v1beta1.IUserEventImportSummary|null);
                }

                /** Represents an ImportUserEventsResponse. */
                class ImportUserEventsResponse implements IImportUserEventsResponse {

                    /**
                     * Constructs a new ImportUserEventsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recommendationengine.v1beta1.IImportUserEventsResponse);

                    /** ImportUserEventsResponse errorSamples. */
                    public errorSamples: google.rpc.IStatus[];

                    /** ImportUserEventsResponse errorsConfig. */
                    public errorsConfig?: (google.cloud.recommendationengine.v1beta1.IImportErrorsConfig|null);

                    /** ImportUserEventsResponse importSummary. */
                    public importSummary?: (google.cloud.recommendationengine.v1beta1.IUserEventImportSummary|null);

                    /**
                     * Creates a new ImportUserEventsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ImportUserEventsResponse instance
                     */
                    public static create(properties?: google.cloud.recommendationengine.v1beta1.IImportUserEventsResponse): google.cloud.recommendationengine.v1beta1.ImportUserEventsResponse;

                    /**
                     * Encodes the specified ImportUserEventsResponse message. Does not implicitly {@link google.cloud.recommendationengine.v1beta1.ImportUserEventsResponse.verify|verify} messages.
                     * @param message ImportUserEventsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recommendationengine.v1beta1.IImportUserEventsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ImportUserEventsResponse message, length delimited. Does not implicitly {@link google.cloud.recommendationengine.v1beta1.ImportUserEventsResponse.verify|verify} messages.
                     * @param message ImportUserEventsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recommendationengine.v1beta1.IImportUserEventsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ImportUserEventsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ImportUserEventsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommendationengine.v1beta1.ImportUserEventsResponse;

                    /**
                     * Decodes an ImportUserEventsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ImportUserEventsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommendationengine.v1beta1.ImportUserEventsResponse;

                    /**
                     * Verifies an ImportUserEventsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ImportUserEventsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ImportUserEventsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recommendationengine.v1beta1.ImportUserEventsResponse;

                    /**
                     * Creates a plain object from an ImportUserEventsResponse message. Also converts values to other types if specified.
                     * @param message ImportUserEventsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recommendationengine.v1beta1.ImportUserEventsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ImportUserEventsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a UserEventImportSummary. */
                interface IUserEventImportSummary {

                    /** UserEventImportSummary joinedEventsCount */
                    joinedEventsCount?: (number|Long|string|null);

                    /** UserEventImportSummary unjoinedEventsCount */
                    unjoinedEventsCount?: (number|Long|string|null);
                }

                /** Represents a UserEventImportSummary. */
                class UserEventImportSummary implements IUserEventImportSummary {

                    /**
                     * Constructs a new UserEventImportSummary.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recommendationengine.v1beta1.IUserEventImportSummary);

                    /** UserEventImportSummary joinedEventsCount. */
                    public joinedEventsCount: (number|Long|string);

                    /** UserEventImportSummary unjoinedEventsCount. */
                    public unjoinedEventsCount: (number|Long|string);

                    /**
                     * Creates a new UserEventImportSummary instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UserEventImportSummary instance
                     */
                    public static create(properties?: google.cloud.recommendationengine.v1beta1.IUserEventImportSummary): google.cloud.recommendationengine.v1beta1.UserEventImportSummary;

                    /**
                     * Encodes the specified UserEventImportSummary message. Does not implicitly {@link google.cloud.recommendationengine.v1beta1.UserEventImportSummary.verify|verify} messages.
                     * @param message UserEventImportSummary message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recommendationengine.v1beta1.IUserEventImportSummary, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UserEventImportSummary message, length delimited. Does not implicitly {@link google.cloud.recommendationengine.v1beta1.UserEventImportSummary.verify|verify} messages.
                     * @param message UserEventImportSummary message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recommendationengine.v1beta1.IUserEventImportSummary, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a UserEventImportSummary message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UserEventImportSummary
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommendationengine.v1beta1.UserEventImportSummary;

                    /**
                     * Decodes a UserEventImportSummary message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UserEventImportSummary
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommendationengine.v1beta1.UserEventImportSummary;

                    /**
                     * Verifies a UserEventImportSummary message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a UserEventImportSummary message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UserEventImportSummary
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recommendationengine.v1beta1.UserEventImportSummary;

                    /**
                     * Creates a plain object from a UserEventImportSummary message. Also converts values to other types if specified.
                     * @param message UserEventImportSummary
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recommendationengine.v1beta1.UserEventImportSummary, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UserEventImportSummary to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a UserEvent. */
                interface IUserEvent {

                    /** UserEvent eventType */
                    eventType?: (string|null);

                    /** UserEvent userInfo */
                    userInfo?: (google.cloud.recommendationengine.v1beta1.IUserInfo|null);

                    /** UserEvent eventDetail */
                    eventDetail?: (google.cloud.recommendationengine.v1beta1.IEventDetail|null);

                    /** UserEvent productEventDetail */
                    productEventDetail?: (google.cloud.recommendationengine.v1beta1.IProductEventDetail|null);

                    /** UserEvent eventTime */
                    eventTime?: (google.protobuf.ITimestamp|null);

                    /** UserEvent eventSource */
                    eventSource?: (google.cloud.recommendationengine.v1beta1.UserEvent.EventSource|keyof typeof google.cloud.recommendationengine.v1beta1.UserEvent.EventSource|null);
                }

                /** Represents a UserEvent. */
                class UserEvent implements IUserEvent {

                    /**
                     * Constructs a new UserEvent.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recommendationengine.v1beta1.IUserEvent);

                    /** UserEvent eventType. */
                    public eventType: string;

                    /** UserEvent userInfo. */
                    public userInfo?: (google.cloud.recommendationengine.v1beta1.IUserInfo|null);

                    /** UserEvent eventDetail. */
                    public eventDetail?: (google.cloud.recommendationengine.v1beta1.IEventDetail|null);

                    /** UserEvent productEventDetail. */
                    public productEventDetail?: (google.cloud.recommendationengine.v1beta1.IProductEventDetail|null);

                    /** UserEvent eventTime. */
                    public eventTime?: (google.protobuf.ITimestamp|null);

                    /** UserEvent eventSource. */
                    public eventSource: (google.cloud.recommendationengine.v1beta1.UserEvent.EventSource|keyof typeof google.cloud.recommendationengine.v1beta1.UserEvent.EventSource);

                    /**
                     * Creates a new UserEvent instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UserEvent instance
                     */
                    public static create(properties?: google.cloud.recommendationengine.v1beta1.IUserEvent): google.cloud.recommendationengine.v1beta1.UserEvent;

                    /**
                     * Encodes the specified UserEvent message. Does not implicitly {@link google.cloud.recommendationengine.v1beta1.UserEvent.verify|verify} messages.
                     * @param message UserEvent message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recommendationengine.v1beta1.IUserEvent, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UserEvent message, length delimited. Does not implicitly {@link google.cloud.recommendationengine.v1beta1.UserEvent.verify|verify} messages.
                     * @param message UserEvent message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recommendationengine.v1beta1.IUserEvent, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a UserEvent message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UserEvent
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommendationengine.v1beta1.UserEvent;

                    /**
                     * Decodes a UserEvent message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UserEvent
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommendationengine.v1beta1.UserEvent;

                    /**
                     * Verifies a UserEvent message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a UserEvent message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UserEvent
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recommendationengine.v1beta1.UserEvent;

                    /**
                     * Creates a plain object from a UserEvent message. Also converts values to other types if specified.
                     * @param message UserEvent
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recommendationengine.v1beta1.UserEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UserEvent to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace UserEvent {

                    /** EventSource enum. */
                    enum EventSource {
                        EVENT_SOURCE_UNSPECIFIED = 0,
                        AUTOML = 1,
                        ECOMMERCE = 2,
                        BATCH_UPLOAD = 3
                    }
                }

                /** Properties of a UserInfo. */
                interface IUserInfo {

                    /** UserInfo visitorId */
                    visitorId?: (string|null);

                    /** UserInfo userId */
                    userId?: (string|null);

                    /** UserInfo ipAddress */
                    ipAddress?: (string|null);

                    /** UserInfo userAgent */
                    userAgent?: (string|null);

                    /** UserInfo directUserRequest */
                    directUserRequest?: (boolean|null);
                }

                /** Represents a UserInfo. */
                class UserInfo implements IUserInfo {

                    /**
                     * Constructs a new UserInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recommendationengine.v1beta1.IUserInfo);

                    /** UserInfo visitorId. */
                    public visitorId: string;

                    /** UserInfo userId. */
                    public userId: string;

                    /** UserInfo ipAddress. */
                    public ipAddress: string;

                    /** UserInfo userAgent. */
                    public userAgent: string;

                    /** UserInfo directUserRequest. */
                    public directUserRequest: boolean;

                    /**
                     * Creates a new UserInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UserInfo instance
                     */
                    public static create(properties?: google.cloud.recommendationengine.v1beta1.IUserInfo): google.cloud.recommendationengine.v1beta1.UserInfo;

                    /**
                     * Encodes the specified UserInfo message. Does not implicitly {@link google.cloud.recommendationengine.v1beta1.UserInfo.verify|verify} messages.
                     * @param message UserInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recommendationengine.v1beta1.IUserInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UserInfo message, length delimited. Does not implicitly {@link google.cloud.recommendationengine.v1beta1.UserInfo.verify|verify} messages.
                     * @param message UserInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recommendationengine.v1beta1.IUserInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a UserInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UserInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommendationengine.v1beta1.UserInfo;

                    /**
                     * Decodes a UserInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UserInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommendationengine.v1beta1.UserInfo;

                    /**
                     * Verifies a UserInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a UserInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UserInfo
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recommendationengine.v1beta1.UserInfo;

                    /**
                     * Creates a plain object from a UserInfo message. Also converts values to other types if specified.
                     * @param message UserInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recommendationengine.v1beta1.UserInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UserInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an EventDetail. */
                interface IEventDetail {

                    /** EventDetail uri */
                    uri?: (string|null);

                    /** EventDetail referrerUri */
                    referrerUri?: (string|null);

                    /** EventDetail pageViewId */
                    pageViewId?: (string|null);

                    /** EventDetail experimentIds */
                    experimentIds?: (string[]|null);

                    /** EventDetail recommendationToken */
                    recommendationToken?: (string|null);

                    /** EventDetail eventAttributes */
                    eventAttributes?: (google.cloud.recommendationengine.v1beta1.IFeatureMap|null);
                }

                /** Represents an EventDetail. */
                class EventDetail implements IEventDetail {

                    /**
                     * Constructs a new EventDetail.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recommendationengine.v1beta1.IEventDetail);

                    /** EventDetail uri. */
                    public uri: string;

                    /** EventDetail referrerUri. */
                    public referrerUri: string;

                    /** EventDetail pageViewId. */
                    public pageViewId: string;

                    /** EventDetail experimentIds. */
                    public experimentIds: string[];

                    /** EventDetail recommendationToken. */
                    public recommendationToken: string;

                    /** EventDetail eventAttributes. */
                    public eventAttributes?: (google.cloud.recommendationengine.v1beta1.IFeatureMap|null);

                    /**
                     * Creates a new EventDetail instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns EventDetail instance
                     */
                    public static create(properties?: google.cloud.recommendationengine.v1beta1.IEventDetail): google.cloud.recommendationengine.v1beta1.EventDetail;

                    /**
                     * Encodes the specified EventDetail message. Does not implicitly {@link google.cloud.recommendationengine.v1beta1.EventDetail.verify|verify} messages.
                     * @param message EventDetail message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recommendationengine.v1beta1.IEventDetail, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified EventDetail message, length delimited. Does not implicitly {@link google.cloud.recommendationengine.v1beta1.EventDetail.verify|verify} messages.
                     * @param message EventDetail message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recommendationengine.v1beta1.IEventDetail, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an EventDetail message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns EventDetail
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommendationengine.v1beta1.EventDetail;

                    /**
                     * Decodes an EventDetail message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns EventDetail
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommendationengine.v1beta1.EventDetail;

                    /**
                     * Verifies an EventDetail message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an EventDetail message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns EventDetail
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recommendationengine.v1beta1.EventDetail;

                    /**
                     * Creates a plain object from an EventDetail message. Also converts values to other types if specified.
                     * @param message EventDetail
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recommendationengine.v1beta1.EventDetail, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this EventDetail to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ProductEventDetail. */
                interface IProductEventDetail {

                    /** ProductEventDetail searchQuery */
                    searchQuery?: (string|null);

                    /** ProductEventDetail pageCategories */
                    pageCategories?: (google.cloud.recommendationengine.v1beta1.CatalogItem.ICategoryHierarchy[]|null);

                    /** ProductEventDetail productDetails */
                    productDetails?: (google.cloud.recommendationengine.v1beta1.IProductDetail[]|null);

                    /** ProductEventDetail listId */
                    listId?: (string|null);

                    /** ProductEventDetail cartId */
                    cartId?: (string|null);

                    /** ProductEventDetail purchaseTransaction */
                    purchaseTransaction?: (google.cloud.recommendationengine.v1beta1.IPurchaseTransaction|null);
                }

                /** Represents a ProductEventDetail. */
                class ProductEventDetail implements IProductEventDetail {

                    /**
                     * Constructs a new ProductEventDetail.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recommendationengine.v1beta1.IProductEventDetail);

                    /** ProductEventDetail searchQuery. */
                    public searchQuery: string;

                    /** ProductEventDetail pageCategories. */
                    public pageCategories: google.cloud.recommendationengine.v1beta1.CatalogItem.ICategoryHierarchy[];

                    /** ProductEventDetail productDetails. */
                    public productDetails: google.cloud.recommendationengine.v1beta1.IProductDetail[];

                    /** ProductEventDetail listId. */
                    public listId: string;

                    /** ProductEventDetail cartId. */
                    public cartId: string;

                    /** ProductEventDetail purchaseTransaction. */
                    public purchaseTransaction?: (google.cloud.recommendationengine.v1beta1.IPurchaseTransaction|null);

                    /**
                     * Creates a new ProductEventDetail instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ProductEventDetail instance
                     */
                    public static create(properties?: google.cloud.recommendationengine.v1beta1.IProductEventDetail): google.cloud.recommendationengine.v1beta1.ProductEventDetail;

                    /**
                     * Encodes the specified ProductEventDetail message. Does not implicitly {@link google.cloud.recommendationengine.v1beta1.ProductEventDetail.verify|verify} messages.
                     * @param message ProductEventDetail message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recommendationengine.v1beta1.IProductEventDetail, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ProductEventDetail message, length delimited. Does not implicitly {@link google.cloud.recommendationengine.v1beta1.ProductEventDetail.verify|verify} messages.
                     * @param message ProductEventDetail message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recommendationengine.v1beta1.IProductEventDetail, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ProductEventDetail message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ProductEventDetail
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommendationengine.v1beta1.ProductEventDetail;

                    /**
                     * Decodes a ProductEventDetail message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ProductEventDetail
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommendationengine.v1beta1.ProductEventDetail;

                    /**
                     * Verifies a ProductEventDetail message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ProductEventDetail message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ProductEventDetail
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recommendationengine.v1beta1.ProductEventDetail;

                    /**
                     * Creates a plain object from a ProductEventDetail message. Also converts values to other types if specified.
                     * @param message ProductEventDetail
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recommendationengine.v1beta1.ProductEventDetail, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ProductEventDetail to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PurchaseTransaction. */
                interface IPurchaseTransaction {

                    /** PurchaseTransaction id */
                    id?: (string|null);

                    /** PurchaseTransaction revenue */
                    revenue?: (number|null);

                    /** PurchaseTransaction taxes */
                    taxes?: ({ [k: string]: number }|null);

                    /** PurchaseTransaction costs */
                    costs?: ({ [k: string]: number }|null);

                    /** PurchaseTransaction currencyCode */
                    currencyCode?: (string|null);
                }

                /** Represents a PurchaseTransaction. */
                class PurchaseTransaction implements IPurchaseTransaction {

                    /**
                     * Constructs a new PurchaseTransaction.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recommendationengine.v1beta1.IPurchaseTransaction);

                    /** PurchaseTransaction id. */
                    public id: string;

                    /** PurchaseTransaction revenue. */
                    public revenue: number;

                    /** PurchaseTransaction taxes. */
                    public taxes: { [k: string]: number };

                    /** PurchaseTransaction costs. */
                    public costs: { [k: string]: number };

                    /** PurchaseTransaction currencyCode. */
                    public currencyCode: string;

                    /**
                     * Creates a new PurchaseTransaction instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PurchaseTransaction instance
                     */
                    public static create(properties?: google.cloud.recommendationengine.v1beta1.IPurchaseTransaction): google.cloud.recommendationengine.v1beta1.PurchaseTransaction;

                    /**
                     * Encodes the specified PurchaseTransaction message. Does not implicitly {@link google.cloud.recommendationengine.v1beta1.PurchaseTransaction.verify|verify} messages.
                     * @param message PurchaseTransaction message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recommendationengine.v1beta1.IPurchaseTransaction, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PurchaseTransaction message, length delimited. Does not implicitly {@link google.cloud.recommendationengine.v1beta1.PurchaseTransaction.verify|verify} messages.
                     * @param message PurchaseTransaction message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recommendationengine.v1beta1.IPurchaseTransaction, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PurchaseTransaction message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PurchaseTransaction
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommendationengine.v1beta1.PurchaseTransaction;

                    /**
                     * Decodes a PurchaseTransaction message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PurchaseTransaction
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommendationengine.v1beta1.PurchaseTransaction;

                    /**
                     * Verifies a PurchaseTransaction message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PurchaseTransaction message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PurchaseTransaction
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recommendationengine.v1beta1.PurchaseTransaction;

                    /**
                     * Creates a plain object from a PurchaseTransaction message. Also converts values to other types if specified.
                     * @param message PurchaseTransaction
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recommendationengine.v1beta1.PurchaseTransaction, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PurchaseTransaction to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ProductDetail. */
                interface IProductDetail {

                    /** ProductDetail id */
                    id?: (string|null);

                    /** ProductDetail currencyCode */
                    currencyCode?: (string|null);

                    /** ProductDetail originalPrice */
                    originalPrice?: (number|null);

                    /** ProductDetail displayPrice */
                    displayPrice?: (number|null);

                    /** ProductDetail stockState */
                    stockState?: (google.cloud.recommendationengine.v1beta1.ProductCatalogItem.StockState|keyof typeof google.cloud.recommendationengine.v1beta1.ProductCatalogItem.StockState|null);

                    /** ProductDetail quantity */
                    quantity?: (number|null);

                    /** ProductDetail availableQuantity */
                    availableQuantity?: (number|null);

                    /** ProductDetail itemAttributes */
                    itemAttributes?: (google.cloud.recommendationengine.v1beta1.IFeatureMap|null);
                }

                /** Represents a ProductDetail. */
                class ProductDetail implements IProductDetail {

                    /**
                     * Constructs a new ProductDetail.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recommendationengine.v1beta1.IProductDetail);

                    /** ProductDetail id. */
                    public id: string;

                    /** ProductDetail currencyCode. */
                    public currencyCode: string;

                    /** ProductDetail originalPrice. */
                    public originalPrice: number;

                    /** ProductDetail displayPrice. */
                    public displayPrice: number;

                    /** ProductDetail stockState. */
                    public stockState: (google.cloud.recommendationengine.v1beta1.ProductCatalogItem.StockState|keyof typeof google.cloud.recommendationengine.v1beta1.ProductCatalogItem.StockState);

                    /** ProductDetail quantity. */
                    public quantity: number;

                    /** ProductDetail availableQuantity. */
                    public availableQuantity: number;

                    /** ProductDetail itemAttributes. */
                    public itemAttributes?: (google.cloud.recommendationengine.v1beta1.IFeatureMap|null);

                    /**
                     * Creates a new ProductDetail instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ProductDetail instance
                     */
                    public static create(properties?: google.cloud.recommendationengine.v1beta1.IProductDetail): google.cloud.recommendationengine.v1beta1.ProductDetail;

                    /**
                     * Encodes the specified ProductDetail message. Does not implicitly {@link google.cloud.recommendationengine.v1beta1.ProductDetail.verify|verify} messages.
                     * @param message ProductDetail message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recommendationengine.v1beta1.IProductDetail, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ProductDetail message, length delimited. Does not implicitly {@link google.cloud.recommendationengine.v1beta1.ProductDetail.verify|verify} messages.
                     * @param message ProductDetail message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recommendationengine.v1beta1.IProductDetail, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ProductDetail message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ProductDetail
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommendationengine.v1beta1.ProductDetail;

                    /**
                     * Decodes a ProductDetail message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ProductDetail
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommendationengine.v1beta1.ProductDetail;

                    /**
                     * Verifies a ProductDetail message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ProductDetail message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ProductDetail
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recommendationengine.v1beta1.ProductDetail;

                    /**
                     * Creates a plain object from a ProductDetail message. Also converts values to other types if specified.
                     * @param message ProductDetail
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recommendationengine.v1beta1.ProductDetail, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ProductDetail to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Represents a PredictionApiKeyRegistry */
                class PredictionApiKeyRegistry extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new PredictionApiKeyRegistry service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new PredictionApiKeyRegistry service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): PredictionApiKeyRegistry;

                    /**
                     * Calls CreatePredictionApiKeyRegistration.
                     * @param request CreatePredictionApiKeyRegistrationRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and PredictionApiKeyRegistration
                     */
                    public createPredictionApiKeyRegistration(request: google.cloud.recommendationengine.v1beta1.ICreatePredictionApiKeyRegistrationRequest, callback: google.cloud.recommendationengine.v1beta1.PredictionApiKeyRegistry.CreatePredictionApiKeyRegistrationCallback): void;

                    /**
                     * Calls CreatePredictionApiKeyRegistration.
                     * @param request CreatePredictionApiKeyRegistrationRequest message or plain object
                     * @returns Promise
                     */
                    public createPredictionApiKeyRegistration(request: google.cloud.recommendationengine.v1beta1.ICreatePredictionApiKeyRegistrationRequest): Promise<google.cloud.recommendationengine.v1beta1.PredictionApiKeyRegistration>;

                    /**
                     * Calls ListPredictionApiKeyRegistrations.
                     * @param request ListPredictionApiKeyRegistrationsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListPredictionApiKeyRegistrationsResponse
                     */
                    public listPredictionApiKeyRegistrations(request: google.cloud.recommendationengine.v1beta1.IListPredictionApiKeyRegistrationsRequest, callback: google.cloud.recommendationengine.v1beta1.PredictionApiKeyRegistry.ListPredictionApiKeyRegistrationsCallback): void;

                    /**
                     * Calls ListPredictionApiKeyRegistrations.
                     * @param request ListPredictionApiKeyRegistrationsRequest message or plain object
                     * @returns Promise
                     */
                    public listPredictionApiKeyRegistrations(request: google.cloud.recommendationengine.v1beta1.IListPredictionApiKeyRegistrationsRequest): Promise<google.cloud.recommendationengine.v1beta1.ListPredictionApiKeyRegistrationsResponse>;

                    /**
                     * Calls DeletePredictionApiKeyRegistration.
                     * @param request DeletePredictionApiKeyRegistrationRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deletePredictionApiKeyRegistration(request: google.cloud.recommendationengine.v1beta1.IDeletePredictionApiKeyRegistrationRequest, callback: google.cloud.recommendationengine.v1beta1.PredictionApiKeyRegistry.DeletePredictionApiKeyRegistrationCallback): void;

                    /**
                     * Calls DeletePredictionApiKeyRegistration.
                     * @param request DeletePredictionApiKeyRegistrationRequest message or plain object
                     * @returns Promise
                     */
                    public deletePredictionApiKeyRegistration(request: google.cloud.recommendationengine.v1beta1.IDeletePredictionApiKeyRegistrationRequest): Promise<google.protobuf.Empty>;
                }

                namespace PredictionApiKeyRegistry {

                    /**
                     * Callback as used by {@link google.cloud.recommendationengine.v1beta1.PredictionApiKeyRegistry#createPredictionApiKeyRegistration}.
                     * @param error Error, if any
                     * @param [response] PredictionApiKeyRegistration
                     */
                    type CreatePredictionApiKeyRegistrationCallback = (error: (Error|null), response?: google.cloud.recommendationengine.v1beta1.PredictionApiKeyRegistration) => void;

                    /**
                     * Callback as used by {@link google.cloud.recommendationengine.v1beta1.PredictionApiKeyRegistry#listPredictionApiKeyRegistrations}.
                     * @param error Error, if any
                     * @param [response] ListPredictionApiKeyRegistrationsResponse
                     */
                    type ListPredictionApiKeyRegistrationsCallback = (error: (Error|null), response?: google.cloud.recommendationengine.v1beta1.ListPredictionApiKeyRegistrationsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.recommendationengine.v1beta1.PredictionApiKeyRegistry#deletePredictionApiKeyRegistration}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeletePredictionApiKeyRegistrationCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;
                }

                /** Properties of a PredictionApiKeyRegistration. */
                interface IPredictionApiKeyRegistration {

                    /** PredictionApiKeyRegistration apiKey */
                    apiKey?: (string|null);
                }

                /** Represents a PredictionApiKeyRegistration. */
                class PredictionApiKeyRegistration implements IPredictionApiKeyRegistration {

                    /**
                     * Constructs a new PredictionApiKeyRegistration.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recommendationengine.v1beta1.IPredictionApiKeyRegistration);

                    /** PredictionApiKeyRegistration apiKey. */
                    public apiKey: string;

                    /**
                     * Creates a new PredictionApiKeyRegistration instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PredictionApiKeyRegistration instance
                     */
                    public static create(properties?: google.cloud.recommendationengine.v1beta1.IPredictionApiKeyRegistration): google.cloud.recommendationengine.v1beta1.PredictionApiKeyRegistration;

                    /**
                     * Encodes the specified PredictionApiKeyRegistration message. Does not implicitly {@link google.cloud.recommendationengine.v1beta1.PredictionApiKeyRegistration.verify|verify} messages.
                     * @param message PredictionApiKeyRegistration message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recommendationengine.v1beta1.IPredictionApiKeyRegistration, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PredictionApiKeyRegistration message, length delimited. Does not implicitly {@link google.cloud.recommendationengine.v1beta1.PredictionApiKeyRegistration.verify|verify} messages.
                     * @param message PredictionApiKeyRegistration message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recommendationengine.v1beta1.IPredictionApiKeyRegistration, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PredictionApiKeyRegistration message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PredictionApiKeyRegistration
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommendationengine.v1beta1.PredictionApiKeyRegistration;

                    /**
                     * Decodes a PredictionApiKeyRegistration message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PredictionApiKeyRegistration
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommendationengine.v1beta1.PredictionApiKeyRegistration;

                    /**
                     * Verifies a PredictionApiKeyRegistration message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PredictionApiKeyRegistration message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PredictionApiKeyRegistration
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recommendationengine.v1beta1.PredictionApiKeyRegistration;

                    /**
                     * Creates a plain object from a PredictionApiKeyRegistration message. Also converts values to other types if specified.
                     * @param message PredictionApiKeyRegistration
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recommendationengine.v1beta1.PredictionApiKeyRegistration, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PredictionApiKeyRegistration to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CreatePredictionApiKeyRegistrationRequest. */
                interface ICreatePredictionApiKeyRegistrationRequest {

                    /** CreatePredictionApiKeyRegistrationRequest parent */
                    parent?: (string|null);

                    /** CreatePredictionApiKeyRegistrationRequest predictionApiKeyRegistration */
                    predictionApiKeyRegistration?: (google.cloud.recommendationengine.v1beta1.IPredictionApiKeyRegistration|null);
                }

                /** Represents a CreatePredictionApiKeyRegistrationRequest. */
                class CreatePredictionApiKeyRegistrationRequest implements ICreatePredictionApiKeyRegistrationRequest {

                    /**
                     * Constructs a new CreatePredictionApiKeyRegistrationRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recommendationengine.v1beta1.ICreatePredictionApiKeyRegistrationRequest);

                    /** CreatePredictionApiKeyRegistrationRequest parent. */
                    public parent: string;

                    /** CreatePredictionApiKeyRegistrationRequest predictionApiKeyRegistration. */
                    public predictionApiKeyRegistration?: (google.cloud.recommendationengine.v1beta1.IPredictionApiKeyRegistration|null);

                    /**
                     * Creates a new CreatePredictionApiKeyRegistrationRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreatePredictionApiKeyRegistrationRequest instance
                     */
                    public static create(properties?: google.cloud.recommendationengine.v1beta1.ICreatePredictionApiKeyRegistrationRequest): google.cloud.recommendationengine.v1beta1.CreatePredictionApiKeyRegistrationRequest;

                    /**
                     * Encodes the specified CreatePredictionApiKeyRegistrationRequest message. Does not implicitly {@link google.cloud.recommendationengine.v1beta1.CreatePredictionApiKeyRegistrationRequest.verify|verify} messages.
                     * @param message CreatePredictionApiKeyRegistrationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recommendationengine.v1beta1.ICreatePredictionApiKeyRegistrationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreatePredictionApiKeyRegistrationRequest message, length delimited. Does not implicitly {@link google.cloud.recommendationengine.v1beta1.CreatePredictionApiKeyRegistrationRequest.verify|verify} messages.
                     * @param message CreatePredictionApiKeyRegistrationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recommendationengine.v1beta1.ICreatePredictionApiKeyRegistrationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreatePredictionApiKeyRegistrationRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreatePredictionApiKeyRegistrationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommendationengine.v1beta1.CreatePredictionApiKeyRegistrationRequest;

                    /**
                     * Decodes a CreatePredictionApiKeyRegistrationRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreatePredictionApiKeyRegistrationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommendationengine.v1beta1.CreatePredictionApiKeyRegistrationRequest;

                    /**
                     * Verifies a CreatePredictionApiKeyRegistrationRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreatePredictionApiKeyRegistrationRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreatePredictionApiKeyRegistrationRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recommendationengine.v1beta1.CreatePredictionApiKeyRegistrationRequest;

                    /**
                     * Creates a plain object from a CreatePredictionApiKeyRegistrationRequest message. Also converts values to other types if specified.
                     * @param message CreatePredictionApiKeyRegistrationRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recommendationengine.v1beta1.CreatePredictionApiKeyRegistrationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreatePredictionApiKeyRegistrationRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListPredictionApiKeyRegistrationsRequest. */
                interface IListPredictionApiKeyRegistrationsRequest {

                    /** ListPredictionApiKeyRegistrationsRequest parent */
                    parent?: (string|null);

                    /** ListPredictionApiKeyRegistrationsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListPredictionApiKeyRegistrationsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListPredictionApiKeyRegistrationsRequest. */
                class ListPredictionApiKeyRegistrationsRequest implements IListPredictionApiKeyRegistrationsRequest {

                    /**
                     * Constructs a new ListPredictionApiKeyRegistrationsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recommendationengine.v1beta1.IListPredictionApiKeyRegistrationsRequest);

                    /** ListPredictionApiKeyRegistrationsRequest parent. */
                    public parent: string;

                    /** ListPredictionApiKeyRegistrationsRequest pageSize. */
                    public pageSize: number;

                    /** ListPredictionApiKeyRegistrationsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListPredictionApiKeyRegistrationsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListPredictionApiKeyRegistrationsRequest instance
                     */
                    public static create(properties?: google.cloud.recommendationengine.v1beta1.IListPredictionApiKeyRegistrationsRequest): google.cloud.recommendationengine.v1beta1.ListPredictionApiKeyRegistrationsRequest;

                    /**
                     * Encodes the specified ListPredictionApiKeyRegistrationsRequest message. Does not implicitly {@link google.cloud.recommendationengine.v1beta1.ListPredictionApiKeyRegistrationsRequest.verify|verify} messages.
                     * @param message ListPredictionApiKeyRegistrationsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recommendationengine.v1beta1.IListPredictionApiKeyRegistrationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListPredictionApiKeyRegistrationsRequest message, length delimited. Does not implicitly {@link google.cloud.recommendationengine.v1beta1.ListPredictionApiKeyRegistrationsRequest.verify|verify} messages.
                     * @param message ListPredictionApiKeyRegistrationsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recommendationengine.v1beta1.IListPredictionApiKeyRegistrationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListPredictionApiKeyRegistrationsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListPredictionApiKeyRegistrationsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommendationengine.v1beta1.ListPredictionApiKeyRegistrationsRequest;

                    /**
                     * Decodes a ListPredictionApiKeyRegistrationsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListPredictionApiKeyRegistrationsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommendationengine.v1beta1.ListPredictionApiKeyRegistrationsRequest;

                    /**
                     * Verifies a ListPredictionApiKeyRegistrationsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListPredictionApiKeyRegistrationsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListPredictionApiKeyRegistrationsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recommendationengine.v1beta1.ListPredictionApiKeyRegistrationsRequest;

                    /**
                     * Creates a plain object from a ListPredictionApiKeyRegistrationsRequest message. Also converts values to other types if specified.
                     * @param message ListPredictionApiKeyRegistrationsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recommendationengine.v1beta1.ListPredictionApiKeyRegistrationsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListPredictionApiKeyRegistrationsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListPredictionApiKeyRegistrationsResponse. */
                interface IListPredictionApiKeyRegistrationsResponse {

                    /** ListPredictionApiKeyRegistrationsResponse predictionApiKeyRegistrations */
                    predictionApiKeyRegistrations?: (google.cloud.recommendationengine.v1beta1.IPredictionApiKeyRegistration[]|null);

                    /** ListPredictionApiKeyRegistrationsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListPredictionApiKeyRegistrationsResponse. */
                class ListPredictionApiKeyRegistrationsResponse implements IListPredictionApiKeyRegistrationsResponse {

                    /**
                     * Constructs a new ListPredictionApiKeyRegistrationsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recommendationengine.v1beta1.IListPredictionApiKeyRegistrationsResponse);

                    /** ListPredictionApiKeyRegistrationsResponse predictionApiKeyRegistrations. */
                    public predictionApiKeyRegistrations: google.cloud.recommendationengine.v1beta1.IPredictionApiKeyRegistration[];

                    /** ListPredictionApiKeyRegistrationsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListPredictionApiKeyRegistrationsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListPredictionApiKeyRegistrationsResponse instance
                     */
                    public static create(properties?: google.cloud.recommendationengine.v1beta1.IListPredictionApiKeyRegistrationsResponse): google.cloud.recommendationengine.v1beta1.ListPredictionApiKeyRegistrationsResponse;

                    /**
                     * Encodes the specified ListPredictionApiKeyRegistrationsResponse message. Does not implicitly {@link google.cloud.recommendationengine.v1beta1.ListPredictionApiKeyRegistrationsResponse.verify|verify} messages.
                     * @param message ListPredictionApiKeyRegistrationsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recommendationengine.v1beta1.IListPredictionApiKeyRegistrationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListPredictionApiKeyRegistrationsResponse message, length delimited. Does not implicitly {@link google.cloud.recommendationengine.v1beta1.ListPredictionApiKeyRegistrationsResponse.verify|verify} messages.
                     * @param message ListPredictionApiKeyRegistrationsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recommendationengine.v1beta1.IListPredictionApiKeyRegistrationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListPredictionApiKeyRegistrationsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListPredictionApiKeyRegistrationsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommendationengine.v1beta1.ListPredictionApiKeyRegistrationsResponse;

                    /**
                     * Decodes a ListPredictionApiKeyRegistrationsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListPredictionApiKeyRegistrationsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommendationengine.v1beta1.ListPredictionApiKeyRegistrationsResponse;

                    /**
                     * Verifies a ListPredictionApiKeyRegistrationsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListPredictionApiKeyRegistrationsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListPredictionApiKeyRegistrationsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recommendationengine.v1beta1.ListPredictionApiKeyRegistrationsResponse;

                    /**
                     * Creates a plain object from a ListPredictionApiKeyRegistrationsResponse message. Also converts values to other types if specified.
                     * @param message ListPredictionApiKeyRegistrationsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recommendationengine.v1beta1.ListPredictionApiKeyRegistrationsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListPredictionApiKeyRegistrationsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeletePredictionApiKeyRegistrationRequest. */
                interface IDeletePredictionApiKeyRegistrationRequest {

                    /** DeletePredictionApiKeyRegistrationRequest name */
                    name?: (string|null);
                }

                /** Represents a DeletePredictionApiKeyRegistrationRequest. */
                class DeletePredictionApiKeyRegistrationRequest implements IDeletePredictionApiKeyRegistrationRequest {

                    /**
                     * Constructs a new DeletePredictionApiKeyRegistrationRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recommendationengine.v1beta1.IDeletePredictionApiKeyRegistrationRequest);

                    /** DeletePredictionApiKeyRegistrationRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeletePredictionApiKeyRegistrationRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeletePredictionApiKeyRegistrationRequest instance
                     */
                    public static create(properties?: google.cloud.recommendationengine.v1beta1.IDeletePredictionApiKeyRegistrationRequest): google.cloud.recommendationengine.v1beta1.DeletePredictionApiKeyRegistrationRequest;

                    /**
                     * Encodes the specified DeletePredictionApiKeyRegistrationRequest message. Does not implicitly {@link google.cloud.recommendationengine.v1beta1.DeletePredictionApiKeyRegistrationRequest.verify|verify} messages.
                     * @param message DeletePredictionApiKeyRegistrationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recommendationengine.v1beta1.IDeletePredictionApiKeyRegistrationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeletePredictionApiKeyRegistrationRequest message, length delimited. Does not implicitly {@link google.cloud.recommendationengine.v1beta1.DeletePredictionApiKeyRegistrationRequest.verify|verify} messages.
                     * @param message DeletePredictionApiKeyRegistrationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recommendationengine.v1beta1.IDeletePredictionApiKeyRegistrationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeletePredictionApiKeyRegistrationRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeletePredictionApiKeyRegistrationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommendationengine.v1beta1.DeletePredictionApiKeyRegistrationRequest;

                    /**
                     * Decodes a DeletePredictionApiKeyRegistrationRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeletePredictionApiKeyRegistrationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommendationengine.v1beta1.DeletePredictionApiKeyRegistrationRequest;

                    /**
                     * Verifies a DeletePredictionApiKeyRegistrationRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeletePredictionApiKeyRegistrationRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeletePredictionApiKeyRegistrationRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recommendationengine.v1beta1.DeletePredictionApiKeyRegistrationRequest;

                    /**
                     * Creates a plain object from a DeletePredictionApiKeyRegistrationRequest message. Also converts values to other types if specified.
                     * @param message DeletePredictionApiKeyRegistrationRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recommendationengine.v1beta1.DeletePredictionApiKeyRegistrationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeletePredictionApiKeyRegistrationRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Represents a PredictionService */
                class PredictionService extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new PredictionService service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new PredictionService service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): PredictionService;

                    /**
                     * Calls Predict.
                     * @param request PredictRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and PredictResponse
                     */
                    public predict(request: google.cloud.recommendationengine.v1beta1.IPredictRequest, callback: google.cloud.recommendationengine.v1beta1.PredictionService.PredictCallback): void;

                    /**
                     * Calls Predict.
                     * @param request PredictRequest message or plain object
                     * @returns Promise
                     */
                    public predict(request: google.cloud.recommendationengine.v1beta1.IPredictRequest): Promise<google.cloud.recommendationengine.v1beta1.PredictResponse>;
                }

                namespace PredictionService {

                    /**
                     * Callback as used by {@link google.cloud.recommendationengine.v1beta1.PredictionService#predict}.
                     * @param error Error, if any
                     * @param [response] PredictResponse
                     */
                    type PredictCallback = (error: (Error|null), response?: google.cloud.recommendationengine.v1beta1.PredictResponse) => void;
                }

                /** Properties of a PredictRequest. */
                interface IPredictRequest {

                    /** PredictRequest name */
                    name?: (string|null);

                    /** PredictRequest userEvent */
                    userEvent?: (google.cloud.recommendationengine.v1beta1.IUserEvent|null);

                    /** PredictRequest pageSize */
                    pageSize?: (number|null);

                    /** PredictRequest pageToken */
                    pageToken?: (string|null);

                    /** PredictRequest filter */
                    filter?: (string|null);

                    /** PredictRequest dryRun */
                    dryRun?: (boolean|null);

                    /** PredictRequest params */
                    params?: ({ [k: string]: google.protobuf.IValue }|null);

                    /** PredictRequest labels */
                    labels?: ({ [k: string]: string }|null);
                }

                /** Represents a PredictRequest. */
                class PredictRequest implements IPredictRequest {

                    /**
                     * Constructs a new PredictRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recommendationengine.v1beta1.IPredictRequest);

                    /** PredictRequest name. */
                    public name: string;

                    /** PredictRequest userEvent. */
                    public userEvent?: (google.cloud.recommendationengine.v1beta1.IUserEvent|null);

                    /** PredictRequest pageSize. */
                    public pageSize: number;

                    /** PredictRequest pageToken. */
                    public pageToken: string;

                    /** PredictRequest filter. */
                    public filter: string;

                    /** PredictRequest dryRun. */
                    public dryRun: boolean;

                    /** PredictRequest params. */
                    public params: { [k: string]: google.protobuf.IValue };

                    /** PredictRequest labels. */
                    public labels: { [k: string]: string };

                    /**
                     * Creates a new PredictRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PredictRequest instance
                     */
                    public static create(properties?: google.cloud.recommendationengine.v1beta1.IPredictRequest): google.cloud.recommendationengine.v1beta1.PredictRequest;

                    /**
                     * Encodes the specified PredictRequest message. Does not implicitly {@link google.cloud.recommendationengine.v1beta1.PredictRequest.verify|verify} messages.
                     * @param message PredictRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recommendationengine.v1beta1.IPredictRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PredictRequest message, length delimited. Does not implicitly {@link google.cloud.recommendationengine.v1beta1.PredictRequest.verify|verify} messages.
                     * @param message PredictRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recommendationengine.v1beta1.IPredictRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PredictRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PredictRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommendationengine.v1beta1.PredictRequest;

                    /**
                     * Decodes a PredictRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PredictRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommendationengine.v1beta1.PredictRequest;

                    /**
                     * Verifies a PredictRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PredictRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PredictRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recommendationengine.v1beta1.PredictRequest;

                    /**
                     * Creates a plain object from a PredictRequest message. Also converts values to other types if specified.
                     * @param message PredictRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recommendationengine.v1beta1.PredictRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PredictRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PredictResponse. */
                interface IPredictResponse {

                    /** PredictResponse results */
                    results?: (google.cloud.recommendationengine.v1beta1.PredictResponse.IPredictionResult[]|null);

                    /** PredictResponse recommendationToken */
                    recommendationToken?: (string|null);

                    /** PredictResponse itemsMissingInCatalog */
                    itemsMissingInCatalog?: (string[]|null);

                    /** PredictResponse dryRun */
                    dryRun?: (boolean|null);

                    /** PredictResponse metadata */
                    metadata?: ({ [k: string]: google.protobuf.IValue }|null);

                    /** PredictResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a PredictResponse. */
                class PredictResponse implements IPredictResponse {

                    /**
                     * Constructs a new PredictResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recommendationengine.v1beta1.IPredictResponse);

                    /** PredictResponse results. */
                    public results: google.cloud.recommendationengine.v1beta1.PredictResponse.IPredictionResult[];

                    /** PredictResponse recommendationToken. */
                    public recommendationToken: string;

                    /** PredictResponse itemsMissingInCatalog. */
                    public itemsMissingInCatalog: string[];

                    /** PredictResponse dryRun. */
                    public dryRun: boolean;

                    /** PredictResponse metadata. */
                    public metadata: { [k: string]: google.protobuf.IValue };

                    /** PredictResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new PredictResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PredictResponse instance
                     */
                    public static create(properties?: google.cloud.recommendationengine.v1beta1.IPredictResponse): google.cloud.recommendationengine.v1beta1.PredictResponse;

                    /**
                     * Encodes the specified PredictResponse message. Does not implicitly {@link google.cloud.recommendationengine.v1beta1.PredictResponse.verify|verify} messages.
                     * @param message PredictResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recommendationengine.v1beta1.IPredictResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PredictResponse message, length delimited. Does not implicitly {@link google.cloud.recommendationengine.v1beta1.PredictResponse.verify|verify} messages.
                     * @param message PredictResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recommendationengine.v1beta1.IPredictResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PredictResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PredictResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommendationengine.v1beta1.PredictResponse;

                    /**
                     * Decodes a PredictResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PredictResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommendationengine.v1beta1.PredictResponse;

                    /**
                     * Verifies a PredictResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PredictResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PredictResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recommendationengine.v1beta1.PredictResponse;

                    /**
                     * Creates a plain object from a PredictResponse message. Also converts values to other types if specified.
                     * @param message PredictResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recommendationengine.v1beta1.PredictResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PredictResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace PredictResponse {

                    /** Properties of a PredictionResult. */
                    interface IPredictionResult {

                        /** PredictionResult id */
                        id?: (string|null);

                        /** PredictionResult itemMetadata */
                        itemMetadata?: ({ [k: string]: google.protobuf.IValue }|null);
                    }

                    /** Represents a PredictionResult. */
                    class PredictionResult implements IPredictionResult {

                        /**
                         * Constructs a new PredictionResult.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.recommendationengine.v1beta1.PredictResponse.IPredictionResult);

                        /** PredictionResult id. */
                        public id: string;

                        /** PredictionResult itemMetadata. */
                        public itemMetadata: { [k: string]: google.protobuf.IValue };

                        /**
                         * Creates a new PredictionResult instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns PredictionResult instance
                         */
                        public static create(properties?: google.cloud.recommendationengine.v1beta1.PredictResponse.IPredictionResult): google.cloud.recommendationengine.v1beta1.PredictResponse.PredictionResult;

                        /**
                         * Encodes the specified PredictionResult message. Does not implicitly {@link google.cloud.recommendationengine.v1beta1.PredictResponse.PredictionResult.verify|verify} messages.
                         * @param message PredictionResult message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.recommendationengine.v1beta1.PredictResponse.IPredictionResult, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified PredictionResult message, length delimited. Does not implicitly {@link google.cloud.recommendationengine.v1beta1.PredictResponse.PredictionResult.verify|verify} messages.
                         * @param message PredictionResult message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.recommendationengine.v1beta1.PredictResponse.IPredictionResult, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a PredictionResult message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns PredictionResult
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommendationengine.v1beta1.PredictResponse.PredictionResult;

                        /**
                         * Decodes a PredictionResult message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns PredictionResult
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommendationengine.v1beta1.PredictResponse.PredictionResult;

                        /**
                         * Verifies a PredictionResult message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a PredictionResult message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns PredictionResult
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.recommendationengine.v1beta1.PredictResponse.PredictionResult;

                        /**
                         * Creates a plain object from a PredictionResult message. Also converts values to other types if specified.
                         * @param message PredictionResult
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.recommendationengine.v1beta1.PredictResponse.PredictionResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this PredictionResult to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Represents a UserEventService */
                class UserEventService extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new UserEventService service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new UserEventService service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): UserEventService;

                    /**
                     * Calls WriteUserEvent.
                     * @param request WriteUserEventRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and UserEvent
                     */
                    public writeUserEvent(request: google.cloud.recommendationengine.v1beta1.IWriteUserEventRequest, callback: google.cloud.recommendationengine.v1beta1.UserEventService.WriteUserEventCallback): void;

                    /**
                     * Calls WriteUserEvent.
                     * @param request WriteUserEventRequest message or plain object
                     * @returns Promise
                     */
                    public writeUserEvent(request: google.cloud.recommendationengine.v1beta1.IWriteUserEventRequest): Promise<google.cloud.recommendationengine.v1beta1.UserEvent>;

                    /**
                     * Calls CollectUserEvent.
                     * @param request CollectUserEventRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and HttpBody
                     */
                    public collectUserEvent(request: google.cloud.recommendationengine.v1beta1.ICollectUserEventRequest, callback: google.cloud.recommendationengine.v1beta1.UserEventService.CollectUserEventCallback): void;

                    /**
                     * Calls CollectUserEvent.
                     * @param request CollectUserEventRequest message or plain object
                     * @returns Promise
                     */
                    public collectUserEvent(request: google.cloud.recommendationengine.v1beta1.ICollectUserEventRequest): Promise<google.api.HttpBody>;

                    /**
                     * Calls ListUserEvents.
                     * @param request ListUserEventsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListUserEventsResponse
                     */
                    public listUserEvents(request: google.cloud.recommendationengine.v1beta1.IListUserEventsRequest, callback: google.cloud.recommendationengine.v1beta1.UserEventService.ListUserEventsCallback): void;

                    /**
                     * Calls ListUserEvents.
                     * @param request ListUserEventsRequest message or plain object
                     * @returns Promise
                     */
                    public listUserEvents(request: google.cloud.recommendationengine.v1beta1.IListUserEventsRequest): Promise<google.cloud.recommendationengine.v1beta1.ListUserEventsResponse>;

                    /**
                     * Calls PurgeUserEvents.
                     * @param request PurgeUserEventsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public purgeUserEvents(request: google.cloud.recommendationengine.v1beta1.IPurgeUserEventsRequest, callback: google.cloud.recommendationengine.v1beta1.UserEventService.PurgeUserEventsCallback): void;

                    /**
                     * Calls PurgeUserEvents.
                     * @param request PurgeUserEventsRequest message or plain object
                     * @returns Promise
                     */
                    public purgeUserEvents(request: google.cloud.recommendationengine.v1beta1.IPurgeUserEventsRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ImportUserEvents.
                     * @param request ImportUserEventsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public importUserEvents(request: google.cloud.recommendationengine.v1beta1.IImportUserEventsRequest, callback: google.cloud.recommendationengine.v1beta1.UserEventService.ImportUserEventsCallback): void;

                    /**
                     * Calls ImportUserEvents.
                     * @param request ImportUserEventsRequest message or plain object
                     * @returns Promise
                     */
                    public importUserEvents(request: google.cloud.recommendationengine.v1beta1.IImportUserEventsRequest): Promise<google.longrunning.Operation>;
                }

                namespace UserEventService {

                    /**
                     * Callback as used by {@link google.cloud.recommendationengine.v1beta1.UserEventService#writeUserEvent}.
                     * @param error Error, if any
                     * @param [response] UserEvent
                     */
                    type WriteUserEventCallback = (error: (Error|null), response?: google.cloud.recommendationengine.v1beta1.UserEvent) => void;

                    /**
                     * Callback as used by {@link google.cloud.recommendationengine.v1beta1.UserEventService#collectUserEvent}.
                     * @param error Error, if any
                     * @param [response] HttpBody
                     */
                    type CollectUserEventCallback = (error: (Error|null), response?: google.api.HttpBody) => void;

                    /**
                     * Callback as used by {@link google.cloud.recommendationengine.v1beta1.UserEventService#listUserEvents}.
                     * @param error Error, if any
                     * @param [response] ListUserEventsResponse
                     */
                    type ListUserEventsCallback = (error: (Error|null), response?: google.cloud.recommendationengine.v1beta1.ListUserEventsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.recommendationengine.v1beta1.UserEventService#purgeUserEvents}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type PurgeUserEventsCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.recommendationengine.v1beta1.UserEventService#importUserEvents}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type ImportUserEventsCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;
                }

                /** Properties of a PurgeUserEventsRequest. */
                interface IPurgeUserEventsRequest {

                    /** PurgeUserEventsRequest parent */
                    parent?: (string|null);

                    /** PurgeUserEventsRequest filter */
                    filter?: (string|null);

                    /** PurgeUserEventsRequest force */
                    force?: (boolean|null);
                }

                /** Represents a PurgeUserEventsRequest. */
                class PurgeUserEventsRequest implements IPurgeUserEventsRequest {

                    /**
                     * Constructs a new PurgeUserEventsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recommendationengine.v1beta1.IPurgeUserEventsRequest);

                    /** PurgeUserEventsRequest parent. */
                    public parent: string;

                    /** PurgeUserEventsRequest filter. */
                    public filter: string;

                    /** PurgeUserEventsRequest force. */
                    public force: boolean;

                    /**
                     * Creates a new PurgeUserEventsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PurgeUserEventsRequest instance
                     */
                    public static create(properties?: google.cloud.recommendationengine.v1beta1.IPurgeUserEventsRequest): google.cloud.recommendationengine.v1beta1.PurgeUserEventsRequest;

                    /**
                     * Encodes the specified PurgeUserEventsRequest message. Does not implicitly {@link google.cloud.recommendationengine.v1beta1.PurgeUserEventsRequest.verify|verify} messages.
                     * @param message PurgeUserEventsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recommendationengine.v1beta1.IPurgeUserEventsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PurgeUserEventsRequest message, length delimited. Does not implicitly {@link google.cloud.recommendationengine.v1beta1.PurgeUserEventsRequest.verify|verify} messages.
                     * @param message PurgeUserEventsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recommendationengine.v1beta1.IPurgeUserEventsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PurgeUserEventsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PurgeUserEventsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommendationengine.v1beta1.PurgeUserEventsRequest;

                    /**
                     * Decodes a PurgeUserEventsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PurgeUserEventsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommendationengine.v1beta1.PurgeUserEventsRequest;

                    /**
                     * Verifies a PurgeUserEventsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PurgeUserEventsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PurgeUserEventsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recommendationengine.v1beta1.PurgeUserEventsRequest;

                    /**
                     * Creates a plain object from a PurgeUserEventsRequest message. Also converts values to other types if specified.
                     * @param message PurgeUserEventsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recommendationengine.v1beta1.PurgeUserEventsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PurgeUserEventsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PurgeUserEventsMetadata. */
                interface IPurgeUserEventsMetadata {

                    /** PurgeUserEventsMetadata operationName */
                    operationName?: (string|null);

                    /** PurgeUserEventsMetadata createTime */
                    createTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents a PurgeUserEventsMetadata. */
                class PurgeUserEventsMetadata implements IPurgeUserEventsMetadata {

                    /**
                     * Constructs a new PurgeUserEventsMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recommendationengine.v1beta1.IPurgeUserEventsMetadata);

                    /** PurgeUserEventsMetadata operationName. */
                    public operationName: string;

                    /** PurgeUserEventsMetadata createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new PurgeUserEventsMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PurgeUserEventsMetadata instance
                     */
                    public static create(properties?: google.cloud.recommendationengine.v1beta1.IPurgeUserEventsMetadata): google.cloud.recommendationengine.v1beta1.PurgeUserEventsMetadata;

                    /**
                     * Encodes the specified PurgeUserEventsMetadata message. Does not implicitly {@link google.cloud.recommendationengine.v1beta1.PurgeUserEventsMetadata.verify|verify} messages.
                     * @param message PurgeUserEventsMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recommendationengine.v1beta1.IPurgeUserEventsMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PurgeUserEventsMetadata message, length delimited. Does not implicitly {@link google.cloud.recommendationengine.v1beta1.PurgeUserEventsMetadata.verify|verify} messages.
                     * @param message PurgeUserEventsMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recommendationengine.v1beta1.IPurgeUserEventsMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PurgeUserEventsMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PurgeUserEventsMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommendationengine.v1beta1.PurgeUserEventsMetadata;

                    /**
                     * Decodes a PurgeUserEventsMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PurgeUserEventsMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommendationengine.v1beta1.PurgeUserEventsMetadata;

                    /**
                     * Verifies a PurgeUserEventsMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PurgeUserEventsMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PurgeUserEventsMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recommendationengine.v1beta1.PurgeUserEventsMetadata;

                    /**
                     * Creates a plain object from a PurgeUserEventsMetadata message. Also converts values to other types if specified.
                     * @param message PurgeUserEventsMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recommendationengine.v1beta1.PurgeUserEventsMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PurgeUserEventsMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PurgeUserEventsResponse. */
                interface IPurgeUserEventsResponse {

                    /** PurgeUserEventsResponse purgedEventsCount */
                    purgedEventsCount?: (number|Long|string|null);

                    /** PurgeUserEventsResponse userEventsSample */
                    userEventsSample?: (google.cloud.recommendationengine.v1beta1.IUserEvent[]|null);
                }

                /** Represents a PurgeUserEventsResponse. */
                class PurgeUserEventsResponse implements IPurgeUserEventsResponse {

                    /**
                     * Constructs a new PurgeUserEventsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recommendationengine.v1beta1.IPurgeUserEventsResponse);

                    /** PurgeUserEventsResponse purgedEventsCount. */
                    public purgedEventsCount: (number|Long|string);

                    /** PurgeUserEventsResponse userEventsSample. */
                    public userEventsSample: google.cloud.recommendationengine.v1beta1.IUserEvent[];

                    /**
                     * Creates a new PurgeUserEventsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PurgeUserEventsResponse instance
                     */
                    public static create(properties?: google.cloud.recommendationengine.v1beta1.IPurgeUserEventsResponse): google.cloud.recommendationengine.v1beta1.PurgeUserEventsResponse;

                    /**
                     * Encodes the specified PurgeUserEventsResponse message. Does not implicitly {@link google.cloud.recommendationengine.v1beta1.PurgeUserEventsResponse.verify|verify} messages.
                     * @param message PurgeUserEventsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recommendationengine.v1beta1.IPurgeUserEventsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PurgeUserEventsResponse message, length delimited. Does not implicitly {@link google.cloud.recommendationengine.v1beta1.PurgeUserEventsResponse.verify|verify} messages.
                     * @param message PurgeUserEventsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recommendationengine.v1beta1.IPurgeUserEventsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PurgeUserEventsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PurgeUserEventsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommendationengine.v1beta1.PurgeUserEventsResponse;

                    /**
                     * Decodes a PurgeUserEventsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PurgeUserEventsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommendationengine.v1beta1.PurgeUserEventsResponse;

                    /**
                     * Verifies a PurgeUserEventsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PurgeUserEventsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PurgeUserEventsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recommendationengine.v1beta1.PurgeUserEventsResponse;

                    /**
                     * Creates a plain object from a PurgeUserEventsResponse message. Also converts values to other types if specified.
                     * @param message PurgeUserEventsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recommendationengine.v1beta1.PurgeUserEventsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PurgeUserEventsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a WriteUserEventRequest. */
                interface IWriteUserEventRequest {

                    /** WriteUserEventRequest parent */
                    parent?: (string|null);

                    /** WriteUserEventRequest userEvent */
                    userEvent?: (google.cloud.recommendationengine.v1beta1.IUserEvent|null);
                }

                /** Represents a WriteUserEventRequest. */
                class WriteUserEventRequest implements IWriteUserEventRequest {

                    /**
                     * Constructs a new WriteUserEventRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recommendationengine.v1beta1.IWriteUserEventRequest);

                    /** WriteUserEventRequest parent. */
                    public parent: string;

                    /** WriteUserEventRequest userEvent. */
                    public userEvent?: (google.cloud.recommendationengine.v1beta1.IUserEvent|null);

                    /**
                     * Creates a new WriteUserEventRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns WriteUserEventRequest instance
                     */
                    public static create(properties?: google.cloud.recommendationengine.v1beta1.IWriteUserEventRequest): google.cloud.recommendationengine.v1beta1.WriteUserEventRequest;

                    /**
                     * Encodes the specified WriteUserEventRequest message. Does not implicitly {@link google.cloud.recommendationengine.v1beta1.WriteUserEventRequest.verify|verify} messages.
                     * @param message WriteUserEventRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recommendationengine.v1beta1.IWriteUserEventRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified WriteUserEventRequest message, length delimited. Does not implicitly {@link google.cloud.recommendationengine.v1beta1.WriteUserEventRequest.verify|verify} messages.
                     * @param message WriteUserEventRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recommendationengine.v1beta1.IWriteUserEventRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a WriteUserEventRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns WriteUserEventRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommendationengine.v1beta1.WriteUserEventRequest;

                    /**
                     * Decodes a WriteUserEventRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns WriteUserEventRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommendationengine.v1beta1.WriteUserEventRequest;

                    /**
                     * Verifies a WriteUserEventRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a WriteUserEventRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns WriteUserEventRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recommendationengine.v1beta1.WriteUserEventRequest;

                    /**
                     * Creates a plain object from a WriteUserEventRequest message. Also converts values to other types if specified.
                     * @param message WriteUserEventRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recommendationengine.v1beta1.WriteUserEventRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this WriteUserEventRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CollectUserEventRequest. */
                interface ICollectUserEventRequest {

                    /** CollectUserEventRequest parent */
                    parent?: (string|null);

                    /** CollectUserEventRequest userEvent */
                    userEvent?: (string|null);

                    /** CollectUserEventRequest uri */
                    uri?: (string|null);

                    /** CollectUserEventRequest ets */
                    ets?: (number|Long|string|null);
                }

                /** Represents a CollectUserEventRequest. */
                class CollectUserEventRequest implements ICollectUserEventRequest {

                    /**
                     * Constructs a new CollectUserEventRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recommendationengine.v1beta1.ICollectUserEventRequest);

                    /** CollectUserEventRequest parent. */
                    public parent: string;

                    /** CollectUserEventRequest userEvent. */
                    public userEvent: string;

                    /** CollectUserEventRequest uri. */
                    public uri: string;

                    /** CollectUserEventRequest ets. */
                    public ets: (number|Long|string);

                    /**
                     * Creates a new CollectUserEventRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CollectUserEventRequest instance
                     */
                    public static create(properties?: google.cloud.recommendationengine.v1beta1.ICollectUserEventRequest): google.cloud.recommendationengine.v1beta1.CollectUserEventRequest;

                    /**
                     * Encodes the specified CollectUserEventRequest message. Does not implicitly {@link google.cloud.recommendationengine.v1beta1.CollectUserEventRequest.verify|verify} messages.
                     * @param message CollectUserEventRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recommendationengine.v1beta1.ICollectUserEventRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CollectUserEventRequest message, length delimited. Does not implicitly {@link google.cloud.recommendationengine.v1beta1.CollectUserEventRequest.verify|verify} messages.
                     * @param message CollectUserEventRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recommendationengine.v1beta1.ICollectUserEventRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CollectUserEventRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CollectUserEventRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommendationengine.v1beta1.CollectUserEventRequest;

                    /**
                     * Decodes a CollectUserEventRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CollectUserEventRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommendationengine.v1beta1.CollectUserEventRequest;

                    /**
                     * Verifies a CollectUserEventRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CollectUserEventRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CollectUserEventRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recommendationengine.v1beta1.CollectUserEventRequest;

                    /**
                     * Creates a plain object from a CollectUserEventRequest message. Also converts values to other types if specified.
                     * @param message CollectUserEventRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recommendationengine.v1beta1.CollectUserEventRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CollectUserEventRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListUserEventsRequest. */
                interface IListUserEventsRequest {

                    /** ListUserEventsRequest parent */
                    parent?: (string|null);

                    /** ListUserEventsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListUserEventsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListUserEventsRequest filter */
                    filter?: (string|null);
                }

                /** Represents a ListUserEventsRequest. */
                class ListUserEventsRequest implements IListUserEventsRequest {

                    /**
                     * Constructs a new ListUserEventsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recommendationengine.v1beta1.IListUserEventsRequest);

                    /** ListUserEventsRequest parent. */
                    public parent: string;

                    /** ListUserEventsRequest pageSize. */
                    public pageSize: number;

                    /** ListUserEventsRequest pageToken. */
                    public pageToken: string;

                    /** ListUserEventsRequest filter. */
                    public filter: string;

                    /**
                     * Creates a new ListUserEventsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListUserEventsRequest instance
                     */
                    public static create(properties?: google.cloud.recommendationengine.v1beta1.IListUserEventsRequest): google.cloud.recommendationengine.v1beta1.ListUserEventsRequest;

                    /**
                     * Encodes the specified ListUserEventsRequest message. Does not implicitly {@link google.cloud.recommendationengine.v1beta1.ListUserEventsRequest.verify|verify} messages.
                     * @param message ListUserEventsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recommendationengine.v1beta1.IListUserEventsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListUserEventsRequest message, length delimited. Does not implicitly {@link google.cloud.recommendationengine.v1beta1.ListUserEventsRequest.verify|verify} messages.
                     * @param message ListUserEventsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recommendationengine.v1beta1.IListUserEventsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListUserEventsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListUserEventsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommendationengine.v1beta1.ListUserEventsRequest;

                    /**
                     * Decodes a ListUserEventsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListUserEventsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommendationengine.v1beta1.ListUserEventsRequest;

                    /**
                     * Verifies a ListUserEventsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListUserEventsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListUserEventsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recommendationengine.v1beta1.ListUserEventsRequest;

                    /**
                     * Creates a plain object from a ListUserEventsRequest message. Also converts values to other types if specified.
                     * @param message ListUserEventsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recommendationengine.v1beta1.ListUserEventsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListUserEventsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListUserEventsResponse. */
                interface IListUserEventsResponse {

                    /** ListUserEventsResponse userEvents */
                    userEvents?: (google.cloud.recommendationengine.v1beta1.IUserEvent[]|null);

                    /** ListUserEventsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListUserEventsResponse. */
                class ListUserEventsResponse implements IListUserEventsResponse {

                    /**
                     * Constructs a new ListUserEventsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recommendationengine.v1beta1.IListUserEventsResponse);

                    /** ListUserEventsResponse userEvents. */
                    public userEvents: google.cloud.recommendationengine.v1beta1.IUserEvent[];

                    /** ListUserEventsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListUserEventsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListUserEventsResponse instance
                     */
                    public static create(properties?: google.cloud.recommendationengine.v1beta1.IListUserEventsResponse): google.cloud.recommendationengine.v1beta1.ListUserEventsResponse;

                    /**
                     * Encodes the specified ListUserEventsResponse message. Does not implicitly {@link google.cloud.recommendationengine.v1beta1.ListUserEventsResponse.verify|verify} messages.
                     * @param message ListUserEventsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recommendationengine.v1beta1.IListUserEventsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListUserEventsResponse message, length delimited. Does not implicitly {@link google.cloud.recommendationengine.v1beta1.ListUserEventsResponse.verify|verify} messages.
                     * @param message ListUserEventsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recommendationengine.v1beta1.IListUserEventsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListUserEventsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListUserEventsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommendationengine.v1beta1.ListUserEventsResponse;

                    /**
                     * Decodes a ListUserEventsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListUserEventsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommendationengine.v1beta1.ListUserEventsResponse;

                    /**
                     * Verifies a ListUserEventsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListUserEventsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListUserEventsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recommendationengine.v1beta1.ListUserEventsResponse;

                    /**
                     * Creates a plain object from a ListUserEventsResponse message. Also converts values to other types if specified.
                     * @param message ListUserEventsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recommendationengine.v1beta1.ListUserEventsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListUserEventsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }
        }
    }

    /** Namespace api. */
    namespace api {

        /** FieldBehavior enum. */
        enum FieldBehavior {
            FIELD_BEHAVIOR_UNSPECIFIED = 0,
            OPTIONAL = 1,
            REQUIRED = 2,
            OUTPUT_ONLY = 3,
            INPUT_ONLY = 4,
            IMMUTABLE = 5
        }

        /** Properties of a Http. */
        interface IHttp {

            /** Http rules */
            rules?: (google.api.IHttpRule[]|null);

            /** Http fullyDecodeReservedExpansion */
            fullyDecodeReservedExpansion?: (boolean|null);
        }

        /** Represents a Http. */
        class Http implements IHttp {

            /**
             * Constructs a new Http.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IHttp);

            /** Http rules. */
            public rules: google.api.IHttpRule[];

            /** Http fullyDecodeReservedExpansion. */
            public fullyDecodeReservedExpansion: boolean;

            /**
             * Creates a new Http instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Http instance
             */
            public static create(properties?: google.api.IHttp): google.api.Http;

            /**
             * Encodes the specified Http message. Does not implicitly {@link google.api.Http.verify|verify} messages.
             * @param message Http message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IHttp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Http message, length delimited. Does not implicitly {@link google.api.Http.verify|verify} messages.
             * @param message Http message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IHttp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Http message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Http
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.Http;

            /**
             * Decodes a Http message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Http
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.Http;

            /**
             * Verifies a Http message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Http message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Http
             */
            public static fromObject(object: { [k: string]: any }): google.api.Http;

            /**
             * Creates a plain object from a Http message. Also converts values to other types if specified.
             * @param message Http
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.Http, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Http to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a HttpRule. */
        interface IHttpRule {

            /** HttpRule selector */
            selector?: (string|null);

            /** HttpRule get */
            get?: (string|null);

            /** HttpRule put */
            put?: (string|null);

            /** HttpRule post */
            post?: (string|null);

            /** HttpRule delete */
            "delete"?: (string|null);

            /** HttpRule patch */
            patch?: (string|null);

            /** HttpRule custom */
            custom?: (google.api.ICustomHttpPattern|null);

            /** HttpRule body */
            body?: (string|null);

            /** HttpRule responseBody */
            responseBody?: (string|null);

            /** HttpRule additionalBindings */
            additionalBindings?: (google.api.IHttpRule[]|null);
        }

        /** Represents a HttpRule. */
        class HttpRule implements IHttpRule {

            /**
             * Constructs a new HttpRule.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IHttpRule);

            /** HttpRule selector. */
            public selector: string;

            /** HttpRule get. */
            public get: string;

            /** HttpRule put. */
            public put: string;

            /** HttpRule post. */
            public post: string;

            /** HttpRule delete. */
            public delete: string;

            /** HttpRule patch. */
            public patch: string;

            /** HttpRule custom. */
            public custom?: (google.api.ICustomHttpPattern|null);

            /** HttpRule body. */
            public body: string;

            /** HttpRule responseBody. */
            public responseBody: string;

            /** HttpRule additionalBindings. */
            public additionalBindings: google.api.IHttpRule[];

            /** HttpRule pattern. */
            public pattern?: ("get"|"put"|"post"|"delete"|"patch"|"custom");

            /**
             * Creates a new HttpRule instance using the specified properties.
             * @param [properties] Properties to set
             * @returns HttpRule instance
             */
            public static create(properties?: google.api.IHttpRule): google.api.HttpRule;

            /**
             * Encodes the specified HttpRule message. Does not implicitly {@link google.api.HttpRule.verify|verify} messages.
             * @param message HttpRule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IHttpRule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified HttpRule message, length delimited. Does not implicitly {@link google.api.HttpRule.verify|verify} messages.
             * @param message HttpRule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IHttpRule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a HttpRule message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns HttpRule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.HttpRule;

            /**
             * Decodes a HttpRule message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns HttpRule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.HttpRule;

            /**
             * Verifies a HttpRule message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a HttpRule message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns HttpRule
             */
            public static fromObject(object: { [k: string]: any }): google.api.HttpRule;

            /**
             * Creates a plain object from a HttpRule message. Also converts values to other types if specified.
             * @param message HttpRule
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.HttpRule, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this HttpRule to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CustomHttpPattern. */
        interface ICustomHttpPattern {

            /** CustomHttpPattern kind */
            kind?: (string|null);

            /** CustomHttpPattern path */
            path?: (string|null);
        }

        /** Represents a CustomHttpPattern. */
        class CustomHttpPattern implements ICustomHttpPattern {

            /**
             * Constructs a new CustomHttpPattern.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.ICustomHttpPattern);

            /** CustomHttpPattern kind. */
            public kind: string;

            /** CustomHttpPattern path. */
            public path: string;

            /**
             * Creates a new CustomHttpPattern instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CustomHttpPattern instance
             */
            public static create(properties?: google.api.ICustomHttpPattern): google.api.CustomHttpPattern;

            /**
             * Encodes the specified CustomHttpPattern message. Does not implicitly {@link google.api.CustomHttpPattern.verify|verify} messages.
             * @param message CustomHttpPattern message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.ICustomHttpPattern, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CustomHttpPattern message, length delimited. Does not implicitly {@link google.api.CustomHttpPattern.verify|verify} messages.
             * @param message CustomHttpPattern message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.ICustomHttpPattern, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CustomHttpPattern message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CustomHttpPattern
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.CustomHttpPattern;

            /**
             * Decodes a CustomHttpPattern message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CustomHttpPattern
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.CustomHttpPattern;

            /**
             * Verifies a CustomHttpPattern message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CustomHttpPattern message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CustomHttpPattern
             */
            public static fromObject(object: { [k: string]: any }): google.api.CustomHttpPattern;

            /**
             * Creates a plain object from a CustomHttpPattern message. Also converts values to other types if specified.
             * @param message CustomHttpPattern
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.CustomHttpPattern, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CustomHttpPattern to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ResourceDescriptor. */
        interface IResourceDescriptor {

            /** ResourceDescriptor type */
            type?: (string|null);

            /** ResourceDescriptor pattern */
            pattern?: (string[]|null);

            /** ResourceDescriptor nameField */
            nameField?: (string|null);

            /** ResourceDescriptor history */
            history?: (google.api.ResourceDescriptor.History|keyof typeof google.api.ResourceDescriptor.History|null);

            /** ResourceDescriptor plural */
            plural?: (string|null);

            /** ResourceDescriptor singular */
            singular?: (string|null);
        }

        /** Represents a ResourceDescriptor. */
        class ResourceDescriptor implements IResourceDescriptor {

            /**
             * Constructs a new ResourceDescriptor.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IResourceDescriptor);

            /** ResourceDescriptor type. */
            public type: string;

            /** ResourceDescriptor pattern. */
            public pattern: string[];

            /** ResourceDescriptor nameField. */
            public nameField: string;

            /** ResourceDescriptor history. */
            public history: (google.api.ResourceDescriptor.History|keyof typeof google.api.ResourceDescriptor.History);

            /** ResourceDescriptor plural. */
            public plural: string;

            /** ResourceDescriptor singular. */
            public singular: string;

            /**
             * Creates a new ResourceDescriptor instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResourceDescriptor instance
             */
            public static create(properties?: google.api.IResourceDescriptor): google.api.ResourceDescriptor;

            /**
             * Encodes the specified ResourceDescriptor message. Does not implicitly {@link google.api.ResourceDescriptor.verify|verify} messages.
             * @param message ResourceDescriptor message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IResourceDescriptor, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResourceDescriptor message, length delimited. Does not implicitly {@link google.api.ResourceDescriptor.verify|verify} messages.
             * @param message ResourceDescriptor message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IResourceDescriptor, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResourceDescriptor message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResourceDescriptor
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.ResourceDescriptor;

            /**
             * Decodes a ResourceDescriptor message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResourceDescriptor
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.ResourceDescriptor;

            /**
             * Verifies a ResourceDescriptor message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResourceDescriptor message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResourceDescriptor
             */
            public static fromObject(object: { [k: string]: any }): google.api.ResourceDescriptor;

            /**
             * Creates a plain object from a ResourceDescriptor message. Also converts values to other types if specified.
             * @param message ResourceDescriptor
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.ResourceDescriptor, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResourceDescriptor to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace ResourceDescriptor {

            /** History enum. */
            enum History {
                HISTORY_UNSPECIFIED = 0,
                ORIGINALLY_SINGLE_PATTERN = 1,
                FUTURE_MULTI_PATTERN = 2
            }
        }

        /** Properties of a ResourceReference. */
        interface IResourceReference {

            /** ResourceReference type */
            type?: (string|null);

            /** ResourceReference childType */
            childType?: (string|null);
        }

        /** Represents a ResourceReference. */
        class ResourceReference implements IResourceReference {

            /**
             * Constructs a new ResourceReference.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IResourceReference);

            /** ResourceReference type. */
            public type: string;

            /** ResourceReference childType. */
            public childType: string;

            /**
             * Creates a new ResourceReference instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResourceReference instance
             */
            public static create(properties?: google.api.IResourceReference): google.api.ResourceReference;

            /**
             * Encodes the specified ResourceReference message. Does not implicitly {@link google.api.ResourceReference.verify|verify} messages.
             * @param message ResourceReference message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IResourceReference, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResourceReference message, length delimited. Does not implicitly {@link google.api.ResourceReference.verify|verify} messages.
             * @param message ResourceReference message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IResourceReference, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResourceReference message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResourceReference
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.ResourceReference;

            /**
             * Decodes a ResourceReference message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResourceReference
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.ResourceReference;

            /**
             * Verifies a ResourceReference message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResourceReference message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResourceReference
             */
            public static fromObject(object: { [k: string]: any }): google.api.ResourceReference;

            /**
             * Creates a plain object from a ResourceReference message. Also converts values to other types if specified.
             * @param message ResourceReference
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.ResourceReference, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResourceReference to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a HttpBody. */
        interface IHttpBody {

            /** HttpBody contentType */
            contentType?: (string|null);

            /** HttpBody data */
            data?: (Uint8Array|string|null);

            /** HttpBody extensions */
            extensions?: (google.protobuf.IAny[]|null);
        }

        /** Represents a HttpBody. */
        class HttpBody implements IHttpBody {

            /**
             * Constructs a new HttpBody.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IHttpBody);

            /** HttpBody contentType. */
            public contentType: string;

            /** HttpBody data. */
            public data: (Uint8Array|string);

            /** HttpBody extensions. */
            public extensions: google.protobuf.IAny[];

            /**
             * Creates a new HttpBody instance using the specified properties.
             * @param [properties] Properties to set
             * @returns HttpBody instance
             */
            public static create(properties?: google.api.IHttpBody): google.api.HttpBody;

            /**
             * Encodes the specified HttpBody message. Does not implicitly {@link google.api.HttpBody.verify|verify} messages.
             * @param message HttpBody message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IHttpBody, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified HttpBody message, length delimited. Does not implicitly {@link google.api.HttpBody.verify|verify} messages.
             * @param message HttpBody message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IHttpBody, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a HttpBody message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns HttpBody
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.HttpBody;

            /**
             * Decodes a HttpBody message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns HttpBody
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.HttpBody;

            /**
             * Verifies a HttpBody message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a HttpBody message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns HttpBody
             */
            public static fromObject(object: { [k: string]: any }): google.api.HttpBody;

            /**
             * Creates a plain object from a HttpBody message. Also converts values to other types if specified.
             * @param message HttpBody
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.HttpBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this HttpBody to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a FileDescriptorSet. */
        interface IFileDescriptorSet {

            /** FileDescriptorSet file */
            file?: (google.protobuf.IFileDescriptorProto[]|null);
        }

        /** Represents a FileDescriptorSet. */
        class FileDescriptorSet implements IFileDescriptorSet {

            /**
             * Constructs a new FileDescriptorSet.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorSet);

            /** FileDescriptorSet file. */
            public file: google.protobuf.IFileDescriptorProto[];

            /**
             * Creates a new FileDescriptorSet instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDescriptorSet instance
             */
            public static create(properties?: google.protobuf.IFileDescriptorSet): google.protobuf.FileDescriptorSet;

            /**
             * Encodes the specified FileDescriptorSet message. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorSet message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorSet;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorSet;

            /**
             * Verifies a FileDescriptorSet message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorSet message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorSet
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorSet;

            /**
             * Creates a plain object from a FileDescriptorSet message. Also converts values to other types if specified.
             * @param message FileDescriptorSet
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorSet to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FileDescriptorProto. */
        interface IFileDescriptorProto {

            /** FileDescriptorProto name */
            name?: (string|null);

            /** FileDescriptorProto package */
            "package"?: (string|null);

            /** FileDescriptorProto dependency */
            dependency?: (string[]|null);

            /** FileDescriptorProto publicDependency */
            publicDependency?: (number[]|null);

            /** FileDescriptorProto weakDependency */
            weakDependency?: (number[]|null);

            /** FileDescriptorProto messageType */
            messageType?: (google.protobuf.IDescriptorProto[]|null);

            /** FileDescriptorProto enumType */
            enumType?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** FileDescriptorProto service */
            service?: (google.protobuf.IServiceDescriptorProto[]|null);

            /** FileDescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** FileDescriptorProto options */
            options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto sourceCodeInfo */
            sourceCodeInfo?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax */
            syntax?: (string|null);
        }

        /** Represents a FileDescriptorProto. */
        class FileDescriptorProto implements IFileDescriptorProto {

            /**
             * Constructs a new FileDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorProto);

            /** FileDescriptorProto name. */
            public name: string;

            /** FileDescriptorProto package. */
            public package: string;

            /** FileDescriptorProto dependency. */
            public dependency: string[];

            /** FileDescriptorProto publicDependency. */
            public publicDependency: number[];

            /** FileDescriptorProto weakDependency. */
            public weakDependency: number[];

            /** FileDescriptorProto messageType. */
            public messageType: google.protobuf.IDescriptorProto[];

            /** FileDescriptorProto enumType. */
            public enumType: google.protobuf.IEnumDescriptorProto[];

            /** FileDescriptorProto service. */
            public service: google.protobuf.IServiceDescriptorProto[];

            /** FileDescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** FileDescriptorProto options. */
            public options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto sourceCodeInfo. */
            public sourceCodeInfo?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax. */
            public syntax: string;

            /**
             * Creates a new FileDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IFileDescriptorProto): google.protobuf.FileDescriptorProto;

            /**
             * Encodes the specified FileDescriptorProto message. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorProto;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorProto;

            /**
             * Verifies a FileDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorProto;

            /**
             * Creates a plain object from a FileDescriptorProto message. Also converts values to other types if specified.
             * @param message FileDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DescriptorProto. */
        interface IDescriptorProto {

            /** DescriptorProto name */
            name?: (string|null);

            /** DescriptorProto field */
            field?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto nestedType */
            nestedType?: (google.protobuf.IDescriptorProto[]|null);

            /** DescriptorProto enumType */
            enumType?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** DescriptorProto extensionRange */
            extensionRange?: (google.protobuf.DescriptorProto.IExtensionRange[]|null);

            /** DescriptorProto oneofDecl */
            oneofDecl?: (google.protobuf.IOneofDescriptorProto[]|null);

            /** DescriptorProto options */
            options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reservedRange */
            reservedRange?: (google.protobuf.DescriptorProto.IReservedRange[]|null);

            /** DescriptorProto reservedName */
            reservedName?: (string[]|null);
        }

        /** Represents a DescriptorProto. */
        class DescriptorProto implements IDescriptorProto {

            /**
             * Constructs a new DescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDescriptorProto);

            /** DescriptorProto name. */
            public name: string;

            /** DescriptorProto field. */
            public field: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto nestedType. */
            public nestedType: google.protobuf.IDescriptorProto[];

            /** DescriptorProto enumType. */
            public enumType: google.protobuf.IEnumDescriptorProto[];

            /** DescriptorProto extensionRange. */
            public extensionRange: google.protobuf.DescriptorProto.IExtensionRange[];

            /** DescriptorProto oneofDecl. */
            public oneofDecl: google.protobuf.IOneofDescriptorProto[];

            /** DescriptorProto options. */
            public options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reservedRange. */
            public reservedRange: google.protobuf.DescriptorProto.IReservedRange[];

            /** DescriptorProto reservedName. */
            public reservedName: string[];

            /**
             * Creates a new DescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DescriptorProto instance
             */
            public static create(properties?: google.protobuf.IDescriptorProto): google.protobuf.DescriptorProto;

            /**
             * Encodes the specified DescriptorProto message. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto;

            /**
             * Verifies a DescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto;

            /**
             * Creates a plain object from a DescriptorProto message. Also converts values to other types if specified.
             * @param message DescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.DescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace DescriptorProto {

            /** Properties of an ExtensionRange. */
            interface IExtensionRange {

                /** ExtensionRange start */
                start?: (number|null);

                /** ExtensionRange end */
                end?: (number|null);

                /** ExtensionRange options */
                options?: (google.protobuf.IExtensionRangeOptions|null);
            }

            /** Represents an ExtensionRange. */
            class ExtensionRange implements IExtensionRange {

                /**
                 * Constructs a new ExtensionRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IExtensionRange);

                /** ExtensionRange start. */
                public start: number;

                /** ExtensionRange end. */
                public end: number;

                /** ExtensionRange options. */
                public options?: (google.protobuf.IExtensionRangeOptions|null);

                /**
                 * Creates a new ExtensionRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ExtensionRange instance
                 */
                public static create(properties?: google.protobuf.DescriptorProto.IExtensionRange): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Encodes the specified ExtensionRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ExtensionRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Verifies an ExtensionRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ExtensionRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ExtensionRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Creates a plain object from an ExtensionRange message. Also converts values to other types if specified.
                 * @param message ExtensionRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ExtensionRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ExtensionRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ReservedRange. */
            interface IReservedRange {

                /** ReservedRange start */
                start?: (number|null);

                /** ReservedRange end */
                end?: (number|null);
            }

            /** Represents a ReservedRange. */
            class ReservedRange implements IReservedRange {

                /**
                 * Constructs a new ReservedRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IReservedRange);

                /** ReservedRange start. */
                public start: number;

                /** ReservedRange end. */
                public end: number;

                /**
                 * Creates a new ReservedRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ReservedRange instance
                 */
                public static create(properties?: google.protobuf.DescriptorProto.IReservedRange): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Encodes the specified ReservedRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ReservedRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Verifies a ReservedRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ReservedRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Creates a plain object from a ReservedRange message. Also converts values to other types if specified.
                 * @param message ReservedRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ReservedRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ReservedRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of an ExtensionRangeOptions. */
        interface IExtensionRangeOptions {

            /** ExtensionRangeOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an ExtensionRangeOptions. */
        class ExtensionRangeOptions implements IExtensionRangeOptions {

            /**
             * Constructs a new ExtensionRangeOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IExtensionRangeOptions);

            /** ExtensionRangeOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new ExtensionRangeOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExtensionRangeOptions instance
             */
            public static create(properties?: google.protobuf.IExtensionRangeOptions): google.protobuf.ExtensionRangeOptions;

            /**
             * Encodes the specified ExtensionRangeOptions message. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.verify|verify} messages.
             * @param message ExtensionRangeOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IExtensionRangeOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ExtensionRangeOptions message, length delimited. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.verify|verify} messages.
             * @param message ExtensionRangeOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IExtensionRangeOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ExtensionRangeOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ExtensionRangeOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ExtensionRangeOptions;

            /**
             * Decodes an ExtensionRangeOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ExtensionRangeOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ExtensionRangeOptions;

            /**
             * Verifies an ExtensionRangeOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ExtensionRangeOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ExtensionRangeOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ExtensionRangeOptions;

            /**
             * Creates a plain object from an ExtensionRangeOptions message. Also converts values to other types if specified.
             * @param message ExtensionRangeOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ExtensionRangeOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ExtensionRangeOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FieldDescriptorProto. */
        interface IFieldDescriptorProto {

            /** FieldDescriptorProto name */
            name?: (string|null);

            /** FieldDescriptorProto number */
            number?: (number|null);

            /** FieldDescriptorProto label */
            label?: (google.protobuf.FieldDescriptorProto.Label|keyof typeof google.protobuf.FieldDescriptorProto.Label|null);

            /** FieldDescriptorProto type */
            type?: (google.protobuf.FieldDescriptorProto.Type|keyof typeof google.protobuf.FieldDescriptorProto.Type|null);

            /** FieldDescriptorProto typeName */
            typeName?: (string|null);

            /** FieldDescriptorProto extendee */
            extendee?: (string|null);

            /** FieldDescriptorProto defaultValue */
            defaultValue?: (string|null);

            /** FieldDescriptorProto oneofIndex */
            oneofIndex?: (number|null);

            /** FieldDescriptorProto jsonName */
            jsonName?: (string|null);

            /** FieldDescriptorProto options */
            options?: (google.protobuf.IFieldOptions|null);

            /** FieldDescriptorProto proto3Optional */
            proto3Optional?: (boolean|null);
        }

        /** Represents a FieldDescriptorProto. */
        class FieldDescriptorProto implements IFieldDescriptorProto {

            /**
             * Constructs a new FieldDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldDescriptorProto);

            /** FieldDescriptorProto name. */
            public name: string;

            /** FieldDescriptorProto number. */
            public number: number;

            /** FieldDescriptorProto label. */
            public label: (google.protobuf.FieldDescriptorProto.Label|keyof typeof google.protobuf.FieldDescriptorProto.Label);

            /** FieldDescriptorProto type. */
            public type: (google.protobuf.FieldDescriptorProto.Type|keyof typeof google.protobuf.FieldDescriptorProto.Type);

            /** FieldDescriptorProto typeName. */
            public typeName: string;

            /** FieldDescriptorProto extendee. */
            public extendee: string;

            /** FieldDescriptorProto defaultValue. */
            public defaultValue: string;

            /** FieldDescriptorProto oneofIndex. */
            public oneofIndex: number;

            /** FieldDescriptorProto jsonName. */
            public jsonName: string;

            /** FieldDescriptorProto options. */
            public options?: (google.protobuf.IFieldOptions|null);

            /** FieldDescriptorProto proto3Optional. */
            public proto3Optional: boolean;

            /**
             * Creates a new FieldDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IFieldDescriptorProto): google.protobuf.FieldDescriptorProto;

            /**
             * Encodes the specified FieldDescriptorProto message. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldDescriptorProto;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldDescriptorProto;

            /**
             * Verifies a FieldDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldDescriptorProto;

            /**
             * Creates a plain object from a FieldDescriptorProto message. Also converts values to other types if specified.
             * @param message FieldDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FieldDescriptorProto {

            /** Type enum. */
            enum Type {
                TYPE_DOUBLE = 1,
                TYPE_FLOAT = 2,
                TYPE_INT64 = 3,
                TYPE_UINT64 = 4,
                TYPE_INT32 = 5,
                TYPE_FIXED64 = 6,
                TYPE_FIXED32 = 7,
                TYPE_BOOL = 8,
                TYPE_STRING = 9,
                TYPE_GROUP = 10,
                TYPE_MESSAGE = 11,
                TYPE_BYTES = 12,
                TYPE_UINT32 = 13,
                TYPE_ENUM = 14,
                TYPE_SFIXED32 = 15,
                TYPE_SFIXED64 = 16,
                TYPE_SINT32 = 17,
                TYPE_SINT64 = 18
            }

            /** Label enum. */
            enum Label {
                LABEL_OPTIONAL = 1,
                LABEL_REQUIRED = 2,
                LABEL_REPEATED = 3
            }
        }

        /** Properties of an OneofDescriptorProto. */
        interface IOneofDescriptorProto {

            /** OneofDescriptorProto name */
            name?: (string|null);

            /** OneofDescriptorProto options */
            options?: (google.protobuf.IOneofOptions|null);
        }

        /** Represents an OneofDescriptorProto. */
        class OneofDescriptorProto implements IOneofDescriptorProto {

            /**
             * Constructs a new OneofDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofDescriptorProto);

            /** OneofDescriptorProto name. */
            public name: string;

            /** OneofDescriptorProto options. */
            public options?: (google.protobuf.IOneofOptions|null);

            /**
             * Creates a new OneofDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneofDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IOneofDescriptorProto): google.protobuf.OneofDescriptorProto;

            /**
             * Encodes the specified OneofDescriptorProto message. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofDescriptorProto;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofDescriptorProto;

            /**
             * Verifies an OneofDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneofDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofDescriptorProto;

            /**
             * Creates a plain object from an OneofDescriptorProto message. Also converts values to other types if specified.
             * @param message OneofDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumDescriptorProto. */
        interface IEnumDescriptorProto {

            /** EnumDescriptorProto name */
            name?: (string|null);

            /** EnumDescriptorProto value */
            value?: (google.protobuf.IEnumValueDescriptorProto[]|null);

            /** EnumDescriptorProto options */
            options?: (google.protobuf.IEnumOptions|null);

            /** EnumDescriptorProto reservedRange */
            reservedRange?: (google.protobuf.EnumDescriptorProto.IEnumReservedRange[]|null);

            /** EnumDescriptorProto reservedName */
            reservedName?: (string[]|null);
        }

        /** Represents an EnumDescriptorProto. */
        class EnumDescriptorProto implements IEnumDescriptorProto {

            /**
             * Constructs a new EnumDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumDescriptorProto);

            /** EnumDescriptorProto name. */
            public name: string;

            /** EnumDescriptorProto value. */
            public value: google.protobuf.IEnumValueDescriptorProto[];

            /** EnumDescriptorProto options. */
            public options?: (google.protobuf.IEnumOptions|null);

            /** EnumDescriptorProto reservedRange. */
            public reservedRange: google.protobuf.EnumDescriptorProto.IEnumReservedRange[];

            /** EnumDescriptorProto reservedName. */
            public reservedName: string[];

            /**
             * Creates a new EnumDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IEnumDescriptorProto): google.protobuf.EnumDescriptorProto;

            /**
             * Encodes the specified EnumDescriptorProto message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumDescriptorProto;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumDescriptorProto;

            /**
             * Verifies an EnumDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumDescriptorProto;

            /**
             * Creates a plain object from an EnumDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace EnumDescriptorProto {

            /** Properties of an EnumReservedRange. */
            interface IEnumReservedRange {

                /** EnumReservedRange start */
                start?: (number|null);

                /** EnumReservedRange end */
                end?: (number|null);
            }

            /** Represents an EnumReservedRange. */
            class EnumReservedRange implements IEnumReservedRange {

                /**
                 * Constructs a new EnumReservedRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.EnumDescriptorProto.IEnumReservedRange);

                /** EnumReservedRange start. */
                public start: number;

                /** EnumReservedRange end. */
                public end: number;

                /**
                 * Creates a new EnumReservedRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns EnumReservedRange instance
                 */
                public static create(properties?: google.protobuf.EnumDescriptorProto.IEnumReservedRange): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Encodes the specified EnumReservedRange message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.EnumReservedRange.verify|verify} messages.
                 * @param message EnumReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.EnumDescriptorProto.IEnumReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified EnumReservedRange message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.EnumReservedRange.verify|verify} messages.
                 * @param message EnumReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.EnumDescriptorProto.IEnumReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an EnumReservedRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns EnumReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Decodes an EnumReservedRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns EnumReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Verifies an EnumReservedRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an EnumReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns EnumReservedRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Creates a plain object from an EnumReservedRange message. Also converts values to other types if specified.
                 * @param message EnumReservedRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.EnumDescriptorProto.EnumReservedRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this EnumReservedRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of an EnumValueDescriptorProto. */
        interface IEnumValueDescriptorProto {

            /** EnumValueDescriptorProto name */
            name?: (string|null);

            /** EnumValueDescriptorProto number */
            number?: (number|null);

            /** EnumValueDescriptorProto options */
            options?: (google.protobuf.IEnumValueOptions|null);
        }

        /** Represents an EnumValueDescriptorProto. */
        class EnumValueDescriptorProto implements IEnumValueDescriptorProto {

            /**
             * Constructs a new EnumValueDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueDescriptorProto);

            /** EnumValueDescriptorProto name. */
            public name: string;

            /** EnumValueDescriptorProto number. */
            public number: number;

            /** EnumValueDescriptorProto options. */
            public options?: (google.protobuf.IEnumValueOptions|null);

            /**
             * Creates a new EnumValueDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValueDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IEnumValueDescriptorProto): google.protobuf.EnumValueDescriptorProto;

            /**
             * Encodes the specified EnumValueDescriptorProto message. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueDescriptorProto;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueDescriptorProto;

            /**
             * Verifies an EnumValueDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueDescriptorProto;

            /**
             * Creates a plain object from an EnumValueDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumValueDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ServiceDescriptorProto. */
        interface IServiceDescriptorProto {

            /** ServiceDescriptorProto name */
            name?: (string|null);

            /** ServiceDescriptorProto method */
            method?: (google.protobuf.IMethodDescriptorProto[]|null);

            /** ServiceDescriptorProto options */
            options?: (google.protobuf.IServiceOptions|null);
        }

        /** Represents a ServiceDescriptorProto. */
        class ServiceDescriptorProto implements IServiceDescriptorProto {

            /**
             * Constructs a new ServiceDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceDescriptorProto);

            /** ServiceDescriptorProto name. */
            public name: string;

            /** ServiceDescriptorProto method. */
            public method: google.protobuf.IMethodDescriptorProto[];

            /** ServiceDescriptorProto options. */
            public options?: (google.protobuf.IServiceOptions|null);

            /**
             * Creates a new ServiceDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IServiceDescriptorProto): google.protobuf.ServiceDescriptorProto;

            /**
             * Encodes the specified ServiceDescriptorProto message. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceDescriptorProto;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceDescriptorProto;

            /**
             * Verifies a ServiceDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceDescriptorProto;

            /**
             * Creates a plain object from a ServiceDescriptorProto message. Also converts values to other types if specified.
             * @param message ServiceDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MethodDescriptorProto. */
        interface IMethodDescriptorProto {

            /** MethodDescriptorProto name */
            name?: (string|null);

            /** MethodDescriptorProto inputType */
            inputType?: (string|null);

            /** MethodDescriptorProto outputType */
            outputType?: (string|null);

            /** MethodDescriptorProto options */
            options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto clientStreaming */
            clientStreaming?: (boolean|null);

            /** MethodDescriptorProto serverStreaming */
            serverStreaming?: (boolean|null);
        }

        /** Represents a MethodDescriptorProto. */
        class MethodDescriptorProto implements IMethodDescriptorProto {

            /**
             * Constructs a new MethodDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodDescriptorProto);

            /** MethodDescriptorProto name. */
            public name: string;

            /** MethodDescriptorProto inputType. */
            public inputType: string;

            /** MethodDescriptorProto outputType. */
            public outputType: string;

            /** MethodDescriptorProto options. */
            public options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto clientStreaming. */
            public clientStreaming: boolean;

            /** MethodDescriptorProto serverStreaming. */
            public serverStreaming: boolean;

            /**
             * Creates a new MethodDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IMethodDescriptorProto): google.protobuf.MethodDescriptorProto;

            /**
             * Encodes the specified MethodDescriptorProto message. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodDescriptorProto;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodDescriptorProto;

            /**
             * Verifies a MethodDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodDescriptorProto;

            /**
             * Creates a plain object from a MethodDescriptorProto message. Also converts values to other types if specified.
             * @param message MethodDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FileOptions. */
        interface IFileOptions {

            /** FileOptions javaPackage */
            javaPackage?: (string|null);

            /** FileOptions javaOuterClassname */
            javaOuterClassname?: (string|null);

            /** FileOptions javaMultipleFiles */
            javaMultipleFiles?: (boolean|null);

            /** FileOptions javaGenerateEqualsAndHash */
            javaGenerateEqualsAndHash?: (boolean|null);

            /** FileOptions javaStringCheckUtf8 */
            javaStringCheckUtf8?: (boolean|null);

            /** FileOptions optimizeFor */
            optimizeFor?: (google.protobuf.FileOptions.OptimizeMode|keyof typeof google.protobuf.FileOptions.OptimizeMode|null);

            /** FileOptions goPackage */
            goPackage?: (string|null);

            /** FileOptions ccGenericServices */
            ccGenericServices?: (boolean|null);

            /** FileOptions javaGenericServices */
            javaGenericServices?: (boolean|null);

            /** FileOptions pyGenericServices */
            pyGenericServices?: (boolean|null);

            /** FileOptions phpGenericServices */
            phpGenericServices?: (boolean|null);

            /** FileOptions deprecated */
            deprecated?: (boolean|null);

            /** FileOptions ccEnableArenas */
            ccEnableArenas?: (boolean|null);

            /** FileOptions objcClassPrefix */
            objcClassPrefix?: (string|null);

            /** FileOptions csharpNamespace */
            csharpNamespace?: (string|null);

            /** FileOptions swiftPrefix */
            swiftPrefix?: (string|null);

            /** FileOptions phpClassPrefix */
            phpClassPrefix?: (string|null);

            /** FileOptions phpNamespace */
            phpNamespace?: (string|null);

            /** FileOptions phpMetadataNamespace */
            phpMetadataNamespace?: (string|null);

            /** FileOptions rubyPackage */
            rubyPackage?: (string|null);

            /** FileOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** FileOptions .google.api.resourceDefinition */
            ".google.api.resourceDefinition"?: (google.api.IResourceDescriptor[]|null);
        }

        /** Represents a FileOptions. */
        class FileOptions implements IFileOptions {

            /**
             * Constructs a new FileOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileOptions);

            /** FileOptions javaPackage. */
            public javaPackage: string;

            /** FileOptions javaOuterClassname. */
            public javaOuterClassname: string;

            /** FileOptions javaMultipleFiles. */
            public javaMultipleFiles: boolean;

            /** FileOptions javaGenerateEqualsAndHash. */
            public javaGenerateEqualsAndHash: boolean;

            /** FileOptions javaStringCheckUtf8. */
            public javaStringCheckUtf8: boolean;

            /** FileOptions optimizeFor. */
            public optimizeFor: (google.protobuf.FileOptions.OptimizeMode|keyof typeof google.protobuf.FileOptions.OptimizeMode);

            /** FileOptions goPackage. */
            public goPackage: string;

            /** FileOptions ccGenericServices. */
            public ccGenericServices: boolean;

            /** FileOptions javaGenericServices. */
            public javaGenericServices: boolean;

            /** FileOptions pyGenericServices. */
            public pyGenericServices: boolean;

            /** FileOptions phpGenericServices. */
            public phpGenericServices: boolean;

            /** FileOptions deprecated. */
            public deprecated: boolean;

            /** FileOptions ccEnableArenas. */
            public ccEnableArenas: boolean;

            /** FileOptions objcClassPrefix. */
            public objcClassPrefix: string;

            /** FileOptions csharpNamespace. */
            public csharpNamespace: string;

            /** FileOptions swiftPrefix. */
            public swiftPrefix: string;

            /** FileOptions phpClassPrefix. */
            public phpClassPrefix: string;

            /** FileOptions phpNamespace. */
            public phpNamespace: string;

            /** FileOptions phpMetadataNamespace. */
            public phpMetadataNamespace: string;

            /** FileOptions rubyPackage. */
            public rubyPackage: string;

            /** FileOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new FileOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileOptions instance
             */
            public static create(properties?: google.protobuf.IFileOptions): google.protobuf.FileOptions;

            /**
             * Encodes the specified FileOptions message. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileOptions message, length delimited. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileOptions;

            /**
             * Decodes a FileOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileOptions;

            /**
             * Verifies a FileOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileOptions;

            /**
             * Creates a plain object from a FileOptions message. Also converts values to other types if specified.
             * @param message FileOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FileOptions {

            /** OptimizeMode enum. */
            enum OptimizeMode {
                SPEED = 1,
                CODE_SIZE = 2,
                LITE_RUNTIME = 3
            }
        }

        /** Properties of a MessageOptions. */
        interface IMessageOptions {

            /** MessageOptions messageSetWireFormat */
            messageSetWireFormat?: (boolean|null);

            /** MessageOptions noStandardDescriptorAccessor */
            noStandardDescriptorAccessor?: (boolean|null);

            /** MessageOptions deprecated */
            deprecated?: (boolean|null);

            /** MessageOptions mapEntry */
            mapEntry?: (boolean|null);

            /** MessageOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** MessageOptions .google.api.resource */
            ".google.api.resource"?: (google.api.IResourceDescriptor|null);
        }

        /** Represents a MessageOptions. */
        class MessageOptions implements IMessageOptions {

            /**
             * Constructs a new MessageOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMessageOptions);

            /** MessageOptions messageSetWireFormat. */
            public messageSetWireFormat: boolean;

            /** MessageOptions noStandardDescriptorAccessor. */
            public noStandardDescriptorAccessor: boolean;

            /** MessageOptions deprecated. */
            public deprecated: boolean;

            /** MessageOptions mapEntry. */
            public mapEntry: boolean;

            /** MessageOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new MessageOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageOptions instance
             */
            public static create(properties?: google.protobuf.IMessageOptions): google.protobuf.MessageOptions;

            /**
             * Encodes the specified MessageOptions message. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageOptions message, length delimited. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MessageOptions;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MessageOptions;

            /**
             * Verifies a MessageOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MessageOptions;

            /**
             * Creates a plain object from a MessageOptions message. Also converts values to other types if specified.
             * @param message MessageOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MessageOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FieldOptions. */
        interface IFieldOptions {

            /** FieldOptions ctype */
            ctype?: (google.protobuf.FieldOptions.CType|keyof typeof google.protobuf.FieldOptions.CType|null);

            /** FieldOptions packed */
            packed?: (boolean|null);

            /** FieldOptions jstype */
            jstype?: (google.protobuf.FieldOptions.JSType|keyof typeof google.protobuf.FieldOptions.JSType|null);

            /** FieldOptions lazy */
            lazy?: (boolean|null);

            /** FieldOptions deprecated */
            deprecated?: (boolean|null);

            /** FieldOptions weak */
            weak?: (boolean|null);

            /** FieldOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** FieldOptions .google.api.fieldBehavior */
            ".google.api.fieldBehavior"?: (google.api.FieldBehavior[]|null);

            /** FieldOptions .google.api.resourceReference */
            ".google.api.resourceReference"?: (google.api.IResourceReference|null);
        }

        /** Represents a FieldOptions. */
        class FieldOptions implements IFieldOptions {

            /**
             * Constructs a new FieldOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldOptions);

            /** FieldOptions ctype. */
            public ctype: (google.protobuf.FieldOptions.CType|keyof typeof google.protobuf.FieldOptions.CType);

            /** FieldOptions packed. */
            public packed: boolean;

            /** FieldOptions jstype. */
            public jstype: (google.protobuf.FieldOptions.JSType|keyof typeof google.protobuf.FieldOptions.JSType);

            /** FieldOptions lazy. */
            public lazy: boolean;

            /** FieldOptions deprecated. */
            public deprecated: boolean;

            /** FieldOptions weak. */
            public weak: boolean;

            /** FieldOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new FieldOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldOptions instance
             */
            public static create(properties?: google.protobuf.IFieldOptions): google.protobuf.FieldOptions;

            /**
             * Encodes the specified FieldOptions message. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldOptions message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldOptions;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldOptions;

            /**
             * Verifies a FieldOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldOptions;

            /**
             * Creates a plain object from a FieldOptions message. Also converts values to other types if specified.
             * @param message FieldOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FieldOptions {

            /** CType enum. */
            enum CType {
                STRING = 0,
                CORD = 1,
                STRING_PIECE = 2
            }

            /** JSType enum. */
            enum JSType {
                JS_NORMAL = 0,
                JS_STRING = 1,
                JS_NUMBER = 2
            }
        }

        /** Properties of an OneofOptions. */
        interface IOneofOptions {

            /** OneofOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an OneofOptions. */
        class OneofOptions implements IOneofOptions {

            /**
             * Constructs a new OneofOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofOptions);

            /** OneofOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new OneofOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneofOptions instance
             */
            public static create(properties?: google.protobuf.IOneofOptions): google.protobuf.OneofOptions;

            /**
             * Encodes the specified OneofOptions message. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofOptions message, length delimited. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofOptions;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofOptions;

            /**
             * Verifies an OneofOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneofOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofOptions;

            /**
             * Creates a plain object from an OneofOptions message. Also converts values to other types if specified.
             * @param message OneofOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumOptions. */
        interface IEnumOptions {

            /** EnumOptions allowAlias */
            allowAlias?: (boolean|null);

            /** EnumOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an EnumOptions. */
        class EnumOptions implements IEnumOptions {

            /**
             * Constructs a new EnumOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumOptions);

            /** EnumOptions allowAlias. */
            public allowAlias: boolean;

            /** EnumOptions deprecated. */
            public deprecated: boolean;

            /** EnumOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new EnumOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumOptions instance
             */
            public static create(properties?: google.protobuf.IEnumOptions): google.protobuf.EnumOptions;

            /**
             * Encodes the specified EnumOptions message. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumOptions;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumOptions;

            /**
             * Verifies an EnumOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumOptions;

            /**
             * Creates a plain object from an EnumOptions message. Also converts values to other types if specified.
             * @param message EnumOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumValueOptions. */
        interface IEnumValueOptions {

            /** EnumValueOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumValueOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an EnumValueOptions. */
        class EnumValueOptions implements IEnumValueOptions {

            /**
             * Constructs a new EnumValueOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueOptions);

            /** EnumValueOptions deprecated. */
            public deprecated: boolean;

            /** EnumValueOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new EnumValueOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValueOptions instance
             */
            public static create(properties?: google.protobuf.IEnumValueOptions): google.protobuf.EnumValueOptions;

            /**
             * Encodes the specified EnumValueOptions message. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueOptions;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueOptions;

            /**
             * Verifies an EnumValueOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueOptions;

            /**
             * Creates a plain object from an EnumValueOptions message. Also converts values to other types if specified.
             * @param message EnumValueOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ServiceOptions. */
        interface IServiceOptions {

            /** ServiceOptions deprecated */
            deprecated?: (boolean|null);

            /** ServiceOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** ServiceOptions .google.api.defaultHost */
            ".google.api.defaultHost"?: (string|null);

            /** ServiceOptions .google.api.oauthScopes */
            ".google.api.oauthScopes"?: (string|null);
        }

        /** Represents a ServiceOptions. */
        class ServiceOptions implements IServiceOptions {

            /**
             * Constructs a new ServiceOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceOptions);

            /** ServiceOptions deprecated. */
            public deprecated: boolean;

            /** ServiceOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new ServiceOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceOptions instance
             */
            public static create(properties?: google.protobuf.IServiceOptions): google.protobuf.ServiceOptions;

            /**
             * Encodes the specified ServiceOptions message. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceOptions message, length delimited. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceOptions;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceOptions;

            /**
             * Verifies a ServiceOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceOptions;

            /**
             * Creates a plain object from a ServiceOptions message. Also converts values to other types if specified.
             * @param message ServiceOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MethodOptions. */
        interface IMethodOptions {

            /** MethodOptions deprecated */
            deprecated?: (boolean|null);

            /** MethodOptions idempotencyLevel */
            idempotencyLevel?: (google.protobuf.MethodOptions.IdempotencyLevel|keyof typeof google.protobuf.MethodOptions.IdempotencyLevel|null);

            /** MethodOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** MethodOptions .google.api.http */
            ".google.api.http"?: (google.api.IHttpRule|null);

            /** MethodOptions .google.api.methodSignature */
            ".google.api.methodSignature"?: (string[]|null);

            /** MethodOptions .google.longrunning.operationInfo */
            ".google.longrunning.operationInfo"?: (google.longrunning.IOperationInfo|null);
        }

        /** Represents a MethodOptions. */
        class MethodOptions implements IMethodOptions {

            /**
             * Constructs a new MethodOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodOptions);

            /** MethodOptions deprecated. */
            public deprecated: boolean;

            /** MethodOptions idempotencyLevel. */
            public idempotencyLevel: (google.protobuf.MethodOptions.IdempotencyLevel|keyof typeof google.protobuf.MethodOptions.IdempotencyLevel);

            /** MethodOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new MethodOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodOptions instance
             */
            public static create(properties?: google.protobuf.IMethodOptions): google.protobuf.MethodOptions;

            /**
             * Encodes the specified MethodOptions message. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodOptions message, length delimited. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodOptions;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodOptions;

            /**
             * Verifies a MethodOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodOptions;

            /**
             * Creates a plain object from a MethodOptions message. Also converts values to other types if specified.
             * @param message MethodOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace MethodOptions {

            /** IdempotencyLevel enum. */
            enum IdempotencyLevel {
                IDEMPOTENCY_UNKNOWN = 0,
                NO_SIDE_EFFECTS = 1,
                IDEMPOTENT = 2
            }
        }

        /** Properties of an UninterpretedOption. */
        interface IUninterpretedOption {

            /** UninterpretedOption name */
            name?: (google.protobuf.UninterpretedOption.INamePart[]|null);

            /** UninterpretedOption identifierValue */
            identifierValue?: (string|null);

            /** UninterpretedOption positiveIntValue */
            positiveIntValue?: (number|Long|string|null);

            /** UninterpretedOption negativeIntValue */
            negativeIntValue?: (number|Long|string|null);

            /** UninterpretedOption doubleValue */
            doubleValue?: (number|null);

            /** UninterpretedOption stringValue */
            stringValue?: (Uint8Array|string|null);

            /** UninterpretedOption aggregateValue */
            aggregateValue?: (string|null);
        }

        /** Represents an UninterpretedOption. */
        class UninterpretedOption implements IUninterpretedOption {

            /**
             * Constructs a new UninterpretedOption.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUninterpretedOption);

            /** UninterpretedOption name. */
            public name: google.protobuf.UninterpretedOption.INamePart[];

            /** UninterpretedOption identifierValue. */
            public identifierValue: string;

            /** UninterpretedOption positiveIntValue. */
            public positiveIntValue: (number|Long|string);

            /** UninterpretedOption negativeIntValue. */
            public negativeIntValue: (number|Long|string);

            /** UninterpretedOption doubleValue. */
            public doubleValue: number;

            /** UninterpretedOption stringValue. */
            public stringValue: (Uint8Array|string);

            /** UninterpretedOption aggregateValue. */
            public aggregateValue: string;

            /**
             * Creates a new UninterpretedOption instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UninterpretedOption instance
             */
            public static create(properties?: google.protobuf.IUninterpretedOption): google.protobuf.UninterpretedOption;

            /**
             * Encodes the specified UninterpretedOption message. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UninterpretedOption message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption;

            /**
             * Verifies an UninterpretedOption message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UninterpretedOption message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UninterpretedOption
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption;

            /**
             * Creates a plain object from an UninterpretedOption message. Also converts values to other types if specified.
             * @param message UninterpretedOption
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.UninterpretedOption, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UninterpretedOption to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace UninterpretedOption {

            /** Properties of a NamePart. */
            interface INamePart {

                /** NamePart namePart */
                namePart: string;

                /** NamePart isExtension */
                isExtension: boolean;
            }

            /** Represents a NamePart. */
            class NamePart implements INamePart {

                /**
                 * Constructs a new NamePart.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.UninterpretedOption.INamePart);

                /** NamePart namePart. */
                public namePart: string;

                /** NamePart isExtension. */
                public isExtension: boolean;

                /**
                 * Creates a new NamePart instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NamePart instance
                 */
                public static create(properties?: google.protobuf.UninterpretedOption.INamePart): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Encodes the specified NamePart message. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified NamePart message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NamePart message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Decodes a NamePart message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Verifies a NamePart message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a NamePart message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns NamePart
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Creates a plain object from a NamePart message. Also converts values to other types if specified.
                 * @param message NamePart
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.UninterpretedOption.NamePart, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this NamePart to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a SourceCodeInfo. */
        interface ISourceCodeInfo {

            /** SourceCodeInfo location */
            location?: (google.protobuf.SourceCodeInfo.ILocation[]|null);
        }

        /** Represents a SourceCodeInfo. */
        class SourceCodeInfo implements ISourceCodeInfo {

            /**
             * Constructs a new SourceCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ISourceCodeInfo);

            /** SourceCodeInfo location. */
            public location: google.protobuf.SourceCodeInfo.ILocation[];

            /**
             * Creates a new SourceCodeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SourceCodeInfo instance
             */
            public static create(properties?: google.protobuf.ISourceCodeInfo): google.protobuf.SourceCodeInfo;

            /**
             * Encodes the specified SourceCodeInfo message. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SourceCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo;

            /**
             * Verifies a SourceCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SourceCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SourceCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo;

            /**
             * Creates a plain object from a SourceCodeInfo message. Also converts values to other types if specified.
             * @param message SourceCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.SourceCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SourceCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace SourceCodeInfo {

            /** Properties of a Location. */
            interface ILocation {

                /** Location path */
                path?: (number[]|null);

                /** Location span */
                span?: (number[]|null);

                /** Location leadingComments */
                leadingComments?: (string|null);

                /** Location trailingComments */
                trailingComments?: (string|null);

                /** Location leadingDetachedComments */
                leadingDetachedComments?: (string[]|null);
            }

            /** Represents a Location. */
            class Location implements ILocation {

                /**
                 * Constructs a new Location.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.SourceCodeInfo.ILocation);

                /** Location path. */
                public path: number[];

                /** Location span. */
                public span: number[];

                /** Location leadingComments. */
                public leadingComments: string;

                /** Location trailingComments. */
                public trailingComments: string;

                /** Location leadingDetachedComments. */
                public leadingDetachedComments: string[];

                /**
                 * Creates a new Location instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Location instance
                 */
                public static create(properties?: google.protobuf.SourceCodeInfo.ILocation): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Encodes the specified Location message. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Location message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Location message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Decodes a Location message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Verifies a Location message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Location message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Location
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Creates a plain object from a Location message. Also converts values to other types if specified.
                 * @param message Location
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.SourceCodeInfo.Location, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Location to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a GeneratedCodeInfo. */
        interface IGeneratedCodeInfo {

            /** GeneratedCodeInfo annotation */
            annotation?: (google.protobuf.GeneratedCodeInfo.IAnnotation[]|null);
        }

        /** Represents a GeneratedCodeInfo. */
        class GeneratedCodeInfo implements IGeneratedCodeInfo {

            /**
             * Constructs a new GeneratedCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IGeneratedCodeInfo);

            /** GeneratedCodeInfo annotation. */
            public annotation: google.protobuf.GeneratedCodeInfo.IAnnotation[];

            /**
             * Creates a new GeneratedCodeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GeneratedCodeInfo instance
             */
            public static create(properties?: google.protobuf.IGeneratedCodeInfo): google.protobuf.GeneratedCodeInfo;

            /**
             * Encodes the specified GeneratedCodeInfo message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GeneratedCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo;

            /**
             * Verifies a GeneratedCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GeneratedCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GeneratedCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo;

            /**
             * Creates a plain object from a GeneratedCodeInfo message. Also converts values to other types if specified.
             * @param message GeneratedCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.GeneratedCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GeneratedCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace GeneratedCodeInfo {

            /** Properties of an Annotation. */
            interface IAnnotation {

                /** Annotation path */
                path?: (number[]|null);

                /** Annotation sourceFile */
                sourceFile?: (string|null);

                /** Annotation begin */
                begin?: (number|null);

                /** Annotation end */
                end?: (number|null);
            }

            /** Represents an Annotation. */
            class Annotation implements IAnnotation {

                /**
                 * Constructs a new Annotation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation);

                /** Annotation path. */
                public path: number[];

                /** Annotation sourceFile. */
                public sourceFile: string;

                /** Annotation begin. */
                public begin: number;

                /** Annotation end. */
                public end: number;

                /**
                 * Creates a new Annotation instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Annotation instance
                 */
                public static create(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Encodes the specified Annotation message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Annotation message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Annotation message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Decodes an Annotation message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Verifies an Annotation message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Annotation message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Annotation
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Creates a plain object from an Annotation message. Also converts values to other types if specified.
                 * @param message Annotation
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.GeneratedCodeInfo.Annotation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Annotation to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a Struct. */
        interface IStruct {

            /** Struct fields */
            fields?: ({ [k: string]: google.protobuf.IValue }|null);
        }

        /** Represents a Struct. */
        class Struct implements IStruct {

            /**
             * Constructs a new Struct.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IStruct);

            /** Struct fields. */
            public fields: { [k: string]: google.protobuf.IValue };

            /**
             * Creates a new Struct instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Struct instance
             */
            public static create(properties?: google.protobuf.IStruct): google.protobuf.Struct;

            /**
             * Encodes the specified Struct message. Does not implicitly {@link google.protobuf.Struct.verify|verify} messages.
             * @param message Struct message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IStruct, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Struct message, length delimited. Does not implicitly {@link google.protobuf.Struct.verify|verify} messages.
             * @param message Struct message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IStruct, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Struct message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Struct
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Struct;

            /**
             * Decodes a Struct message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Struct
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Struct;

            /**
             * Verifies a Struct message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Struct message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Struct
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Struct;

            /**
             * Creates a plain object from a Struct message. Also converts values to other types if specified.
             * @param message Struct
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Struct, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Struct to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Value. */
        interface IValue {

            /** Value nullValue */
            nullValue?: (google.protobuf.NullValue|keyof typeof google.protobuf.NullValue|null);

            /** Value numberValue */
            numberValue?: (number|null);

            /** Value stringValue */
            stringValue?: (string|null);

            /** Value boolValue */
            boolValue?: (boolean|null);

            /** Value structValue */
            structValue?: (google.protobuf.IStruct|null);

            /** Value listValue */
            listValue?: (google.protobuf.IListValue|null);
        }

        /** Represents a Value. */
        class Value implements IValue {

            /**
             * Constructs a new Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IValue);

            /** Value nullValue. */
            public nullValue: (google.protobuf.NullValue|keyof typeof google.protobuf.NullValue);

            /** Value numberValue. */
            public numberValue: number;

            /** Value stringValue. */
            public stringValue: string;

            /** Value boolValue. */
            public boolValue: boolean;

            /** Value structValue. */
            public structValue?: (google.protobuf.IStruct|null);

            /** Value listValue. */
            public listValue?: (google.protobuf.IListValue|null);

            /** Value kind. */
            public kind?: ("nullValue"|"numberValue"|"stringValue"|"boolValue"|"structValue"|"listValue");

            /**
             * Creates a new Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Value instance
             */
            public static create(properties?: google.protobuf.IValue): google.protobuf.Value;

            /**
             * Encodes the specified Value message. Does not implicitly {@link google.protobuf.Value.verify|verify} messages.
             * @param message Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Value message, length delimited. Does not implicitly {@link google.protobuf.Value.verify|verify} messages.
             * @param message Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Value;

            /**
             * Decodes a Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Value;

            /**
             * Verifies a Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Value;

            /**
             * Creates a plain object from a Value message. Also converts values to other types if specified.
             * @param message Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** NullValue enum. */
        enum NullValue {
            NULL_VALUE = 0
        }

        /** Properties of a ListValue. */
        interface IListValue {

            /** ListValue values */
            values?: (google.protobuf.IValue[]|null);
        }

        /** Represents a ListValue. */
        class ListValue implements IListValue {

            /**
             * Constructs a new ListValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IListValue);

            /** ListValue values. */
            public values: google.protobuf.IValue[];

            /**
             * Creates a new ListValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ListValue instance
             */
            public static create(properties?: google.protobuf.IListValue): google.protobuf.ListValue;

            /**
             * Encodes the specified ListValue message. Does not implicitly {@link google.protobuf.ListValue.verify|verify} messages.
             * @param message ListValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IListValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ListValue message, length delimited. Does not implicitly {@link google.protobuf.ListValue.verify|verify} messages.
             * @param message ListValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IListValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ListValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ListValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ListValue;

            /**
             * Decodes a ListValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ListValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ListValue;

            /**
             * Verifies a ListValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ListValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ListValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ListValue;

            /**
             * Creates a plain object from a ListValue message. Also converts values to other types if specified.
             * @param message ListValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ListValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ListValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Timestamp. */
        interface ITimestamp {

            /** Timestamp seconds */
            seconds?: (number|Long|string|null);

            /** Timestamp nanos */
            nanos?: (number|null);
        }

        /** Represents a Timestamp. */
        class Timestamp implements ITimestamp {

            /**
             * Constructs a new Timestamp.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ITimestamp);

            /** Timestamp seconds. */
            public seconds: (number|Long|string);

            /** Timestamp nanos. */
            public nanos: number;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Timestamp instance
             */
            public static create(properties?: google.protobuf.ITimestamp): google.protobuf.Timestamp;

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Timestamp;

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Timestamp;

            /**
             * Verifies a Timestamp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Timestamp
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Timestamp;

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @param message Timestamp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Timestamp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Timestamp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an Any. */
        interface IAny {

            /** Any type_url */
            type_url?: (string|null);

            /** Any value */
            value?: (Uint8Array|string|null);
        }

        /** Represents an Any. */
        class Any implements IAny {

            /**
             * Constructs a new Any.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IAny);

            /** Any type_url. */
            public type_url: string;

            /** Any value. */
            public value: (Uint8Array|string);

            /**
             * Creates a new Any instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Any instance
             */
            public static create(properties?: google.protobuf.IAny): google.protobuf.Any;

            /**
             * Encodes the specified Any message. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @param message Any message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IAny, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Any message, length delimited. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @param message Any message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IAny, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Any message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Any;

            /**
             * Decodes an Any message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Any;

            /**
             * Verifies an Any message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Any message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Any
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Any;

            /**
             * Creates a plain object from an Any message. Also converts values to other types if specified.
             * @param message Any
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Any, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Any to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Duration. */
        interface IDuration {

            /** Duration seconds */
            seconds?: (number|Long|string|null);

            /** Duration nanos */
            nanos?: (number|null);
        }

        /** Represents a Duration. */
        class Duration implements IDuration {

            /**
             * Constructs a new Duration.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDuration);

            /** Duration seconds. */
            public seconds: (number|Long|string);

            /** Duration nanos. */
            public nanos: number;

            /**
             * Creates a new Duration instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Duration instance
             */
            public static create(properties?: google.protobuf.IDuration): google.protobuf.Duration;

            /**
             * Encodes the specified Duration message. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
             * @param message Duration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDuration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Duration message, length delimited. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
             * @param message Duration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDuration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Duration message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Duration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Duration;

            /**
             * Decodes a Duration message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Duration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Duration;

            /**
             * Verifies a Duration message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Duration message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Duration
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Duration;

            /**
             * Creates a plain object from a Duration message. Also converts values to other types if specified.
             * @param message Duration
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Duration, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Duration to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an Empty. */
        interface IEmpty {
        }

        /** Represents an Empty. */
        class Empty implements IEmpty {

            /**
             * Constructs a new Empty.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEmpty);

            /**
             * Creates a new Empty instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Empty instance
             */
            public static create(properties?: google.protobuf.IEmpty): google.protobuf.Empty;

            /**
             * Encodes the specified Empty message. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Empty message, length delimited. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Empty message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Empty;

            /**
             * Decodes an Empty message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Empty;

            /**
             * Verifies an Empty message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Empty message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Empty
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Empty;

            /**
             * Creates a plain object from an Empty message. Also converts values to other types if specified.
             * @param message Empty
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Empty, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Empty to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FieldMask. */
        interface IFieldMask {

            /** FieldMask paths */
            paths?: (string[]|null);
        }

        /** Represents a FieldMask. */
        class FieldMask implements IFieldMask {

            /**
             * Constructs a new FieldMask.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldMask);

            /** FieldMask paths. */
            public paths: string[];

            /**
             * Creates a new FieldMask instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldMask instance
             */
            public static create(properties?: google.protobuf.IFieldMask): google.protobuf.FieldMask;

            /**
             * Encodes the specified FieldMask message. Does not implicitly {@link google.protobuf.FieldMask.verify|verify} messages.
             * @param message FieldMask message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldMask, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldMask message, length delimited. Does not implicitly {@link google.protobuf.FieldMask.verify|verify} messages.
             * @param message FieldMask message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldMask, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldMask message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldMask
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldMask;

            /**
             * Decodes a FieldMask message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldMask
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldMask;

            /**
             * Verifies a FieldMask message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldMask message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldMask
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldMask;

            /**
             * Creates a plain object from a FieldMask message. Also converts values to other types if specified.
             * @param message FieldMask
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldMask, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldMask to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace rpc. */
    namespace rpc {

        /** Properties of a Status. */
        interface IStatus {

            /** Status code */
            code?: (number|null);

            /** Status message */
            message?: (string|null);

            /** Status details */
            details?: (google.protobuf.IAny[]|null);
        }

        /** Represents a Status. */
        class Status implements IStatus {

            /**
             * Constructs a new Status.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.rpc.IStatus);

            /** Status code. */
            public code: number;

            /** Status message. */
            public message: string;

            /** Status details. */
            public details: google.protobuf.IAny[];

            /**
             * Creates a new Status instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Status instance
             */
            public static create(properties?: google.rpc.IStatus): google.rpc.Status;

            /**
             * Encodes the specified Status message. Does not implicitly {@link google.rpc.Status.verify|verify} messages.
             * @param message Status message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.rpc.IStatus, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Status message, length delimited. Does not implicitly {@link google.rpc.Status.verify|verify} messages.
             * @param message Status message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.rpc.IStatus, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Status message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Status
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.rpc.Status;

            /**
             * Decodes a Status message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Status
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.rpc.Status;

            /**
             * Verifies a Status message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Status message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Status
             */
            public static fromObject(object: { [k: string]: any }): google.rpc.Status;

            /**
             * Creates a plain object from a Status message. Also converts values to other types if specified.
             * @param message Status
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.rpc.Status, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Status to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace longrunning. */
    namespace longrunning {

        /** Represents an Operations */
        class Operations extends $protobuf.rpc.Service {

            /**
             * Constructs a new Operations service.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             */
            constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

            /**
             * Creates new Operations service using the specified rpc implementation.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             * @returns RPC service. Useful where requests and/or responses are streamed.
             */
            public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Operations;

            /**
             * Calls ListOperations.
             * @param request ListOperationsRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and ListOperationsResponse
             */
            public listOperations(request: google.longrunning.IListOperationsRequest, callback: google.longrunning.Operations.ListOperationsCallback): void;

            /**
             * Calls ListOperations.
             * @param request ListOperationsRequest message or plain object
             * @returns Promise
             */
            public listOperations(request: google.longrunning.IListOperationsRequest): Promise<google.longrunning.ListOperationsResponse>;

            /**
             * Calls GetOperation.
             * @param request GetOperationRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Operation
             */
            public getOperation(request: google.longrunning.IGetOperationRequest, callback: google.longrunning.Operations.GetOperationCallback): void;

            /**
             * Calls GetOperation.
             * @param request GetOperationRequest message or plain object
             * @returns Promise
             */
            public getOperation(request: google.longrunning.IGetOperationRequest): Promise<google.longrunning.Operation>;

            /**
             * Calls DeleteOperation.
             * @param request DeleteOperationRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public deleteOperation(request: google.longrunning.IDeleteOperationRequest, callback: google.longrunning.Operations.DeleteOperationCallback): void;

            /**
             * Calls DeleteOperation.
             * @param request DeleteOperationRequest message or plain object
             * @returns Promise
             */
            public deleteOperation(request: google.longrunning.IDeleteOperationRequest): Promise<google.protobuf.Empty>;

            /**
             * Calls CancelOperation.
             * @param request CancelOperationRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public cancelOperation(request: google.longrunning.ICancelOperationRequest, callback: google.longrunning.Operations.CancelOperationCallback): void;

            /**
             * Calls CancelOperation.
             * @param request CancelOperationRequest message or plain object
             * @returns Promise
             */
            public cancelOperation(request: google.longrunning.ICancelOperationRequest): Promise<google.protobuf.Empty>;

            /**
             * Calls WaitOperation.
             * @param request WaitOperationRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Operation
             */
            public waitOperation(request: google.longrunning.IWaitOperationRequest, callback: google.longrunning.Operations.WaitOperationCallback): void;

            /**
             * Calls WaitOperation.
             * @param request WaitOperationRequest message or plain object
             * @returns Promise
             */
            public waitOperation(request: google.longrunning.IWaitOperationRequest): Promise<google.longrunning.Operation>;
        }

        namespace Operations {

            /**
             * Callback as used by {@link google.longrunning.Operations#listOperations}.
             * @param error Error, if any
             * @param [response] ListOperationsResponse
             */
            type ListOperationsCallback = (error: (Error|null), response?: google.longrunning.ListOperationsResponse) => void;

            /**
             * Callback as used by {@link google.longrunning.Operations#getOperation}.
             * @param error Error, if any
             * @param [response] Operation
             */
            type GetOperationCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

            /**
             * Callback as used by {@link google.longrunning.Operations#deleteOperation}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type DeleteOperationCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link google.longrunning.Operations#cancelOperation}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type CancelOperationCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link google.longrunning.Operations#waitOperation}.
             * @param error Error, if any
             * @param [response] Operation
             */
            type WaitOperationCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;
        }

        /** Properties of an Operation. */
        interface IOperation {

            /** Operation name */
            name?: (string|null);

            /** Operation metadata */
            metadata?: (google.protobuf.IAny|null);

            /** Operation done */
            done?: (boolean|null);

            /** Operation error */
            error?: (google.rpc.IStatus|null);

            /** Operation response */
            response?: (google.protobuf.IAny|null);
        }

        /** Represents an Operation. */
        class Operation implements IOperation {

            /**
             * Constructs a new Operation.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IOperation);

            /** Operation name. */
            public name: string;

            /** Operation metadata. */
            public metadata?: (google.protobuf.IAny|null);

            /** Operation done. */
            public done: boolean;

            /** Operation error. */
            public error?: (google.rpc.IStatus|null);

            /** Operation response. */
            public response?: (google.protobuf.IAny|null);

            /** Operation result. */
            public result?: ("error"|"response");

            /**
             * Creates a new Operation instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Operation instance
             */
            public static create(properties?: google.longrunning.IOperation): google.longrunning.Operation;

            /**
             * Encodes the specified Operation message. Does not implicitly {@link google.longrunning.Operation.verify|verify} messages.
             * @param message Operation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IOperation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Operation message, length delimited. Does not implicitly {@link google.longrunning.Operation.verify|verify} messages.
             * @param message Operation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IOperation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Operation message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Operation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.Operation;

            /**
             * Decodes an Operation message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Operation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.Operation;

            /**
             * Verifies an Operation message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Operation message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Operation
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.Operation;

            /**
             * Creates a plain object from an Operation message. Also converts values to other types if specified.
             * @param message Operation
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.Operation, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Operation to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a GetOperationRequest. */
        interface IGetOperationRequest {

            /** GetOperationRequest name */
            name?: (string|null);
        }

        /** Represents a GetOperationRequest. */
        class GetOperationRequest implements IGetOperationRequest {

            /**
             * Constructs a new GetOperationRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IGetOperationRequest);

            /** GetOperationRequest name. */
            public name: string;

            /**
             * Creates a new GetOperationRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetOperationRequest instance
             */
            public static create(properties?: google.longrunning.IGetOperationRequest): google.longrunning.GetOperationRequest;

            /**
             * Encodes the specified GetOperationRequest message. Does not implicitly {@link google.longrunning.GetOperationRequest.verify|verify} messages.
             * @param message GetOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IGetOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetOperationRequest message, length delimited. Does not implicitly {@link google.longrunning.GetOperationRequest.verify|verify} messages.
             * @param message GetOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IGetOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetOperationRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.GetOperationRequest;

            /**
             * Decodes a GetOperationRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.GetOperationRequest;

            /**
             * Verifies a GetOperationRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GetOperationRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetOperationRequest
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.GetOperationRequest;

            /**
             * Creates a plain object from a GetOperationRequest message. Also converts values to other types if specified.
             * @param message GetOperationRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.GetOperationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetOperationRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ListOperationsRequest. */
        interface IListOperationsRequest {

            /** ListOperationsRequest name */
            name?: (string|null);

            /** ListOperationsRequest filter */
            filter?: (string|null);

            /** ListOperationsRequest pageSize */
            pageSize?: (number|null);

            /** ListOperationsRequest pageToken */
            pageToken?: (string|null);
        }

        /** Represents a ListOperationsRequest. */
        class ListOperationsRequest implements IListOperationsRequest {

            /**
             * Constructs a new ListOperationsRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IListOperationsRequest);

            /** ListOperationsRequest name. */
            public name: string;

            /** ListOperationsRequest filter. */
            public filter: string;

            /** ListOperationsRequest pageSize. */
            public pageSize: number;

            /** ListOperationsRequest pageToken. */
            public pageToken: string;

            /**
             * Creates a new ListOperationsRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ListOperationsRequest instance
             */
            public static create(properties?: google.longrunning.IListOperationsRequest): google.longrunning.ListOperationsRequest;

            /**
             * Encodes the specified ListOperationsRequest message. Does not implicitly {@link google.longrunning.ListOperationsRequest.verify|verify} messages.
             * @param message ListOperationsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IListOperationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ListOperationsRequest message, length delimited. Does not implicitly {@link google.longrunning.ListOperationsRequest.verify|verify} messages.
             * @param message ListOperationsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IListOperationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ListOperationsRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ListOperationsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.ListOperationsRequest;

            /**
             * Decodes a ListOperationsRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ListOperationsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.ListOperationsRequest;

            /**
             * Verifies a ListOperationsRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ListOperationsRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ListOperationsRequest
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.ListOperationsRequest;

            /**
             * Creates a plain object from a ListOperationsRequest message. Also converts values to other types if specified.
             * @param message ListOperationsRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.ListOperationsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ListOperationsRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ListOperationsResponse. */
        interface IListOperationsResponse {

            /** ListOperationsResponse operations */
            operations?: (google.longrunning.IOperation[]|null);

            /** ListOperationsResponse nextPageToken */
            nextPageToken?: (string|null);
        }

        /** Represents a ListOperationsResponse. */
        class ListOperationsResponse implements IListOperationsResponse {

            /**
             * Constructs a new ListOperationsResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IListOperationsResponse);

            /** ListOperationsResponse operations. */
            public operations: google.longrunning.IOperation[];

            /** ListOperationsResponse nextPageToken. */
            public nextPageToken: string;

            /**
             * Creates a new ListOperationsResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ListOperationsResponse instance
             */
            public static create(properties?: google.longrunning.IListOperationsResponse): google.longrunning.ListOperationsResponse;

            /**
             * Encodes the specified ListOperationsResponse message. Does not implicitly {@link google.longrunning.ListOperationsResponse.verify|verify} messages.
             * @param message ListOperationsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IListOperationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ListOperationsResponse message, length delimited. Does not implicitly {@link google.longrunning.ListOperationsResponse.verify|verify} messages.
             * @param message ListOperationsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IListOperationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ListOperationsResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ListOperationsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.ListOperationsResponse;

            /**
             * Decodes a ListOperationsResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ListOperationsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.ListOperationsResponse;

            /**
             * Verifies a ListOperationsResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ListOperationsResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ListOperationsResponse
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.ListOperationsResponse;

            /**
             * Creates a plain object from a ListOperationsResponse message. Also converts values to other types if specified.
             * @param message ListOperationsResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.ListOperationsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ListOperationsResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CancelOperationRequest. */
        interface ICancelOperationRequest {

            /** CancelOperationRequest name */
            name?: (string|null);
        }

        /** Represents a CancelOperationRequest. */
        class CancelOperationRequest implements ICancelOperationRequest {

            /**
             * Constructs a new CancelOperationRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.ICancelOperationRequest);

            /** CancelOperationRequest name. */
            public name: string;

            /**
             * Creates a new CancelOperationRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CancelOperationRequest instance
             */
            public static create(properties?: google.longrunning.ICancelOperationRequest): google.longrunning.CancelOperationRequest;

            /**
             * Encodes the specified CancelOperationRequest message. Does not implicitly {@link google.longrunning.CancelOperationRequest.verify|verify} messages.
             * @param message CancelOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.ICancelOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CancelOperationRequest message, length delimited. Does not implicitly {@link google.longrunning.CancelOperationRequest.verify|verify} messages.
             * @param message CancelOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.ICancelOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CancelOperationRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CancelOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.CancelOperationRequest;

            /**
             * Decodes a CancelOperationRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CancelOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.CancelOperationRequest;

            /**
             * Verifies a CancelOperationRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CancelOperationRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CancelOperationRequest
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.CancelOperationRequest;

            /**
             * Creates a plain object from a CancelOperationRequest message. Also converts values to other types if specified.
             * @param message CancelOperationRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.CancelOperationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CancelOperationRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DeleteOperationRequest. */
        interface IDeleteOperationRequest {

            /** DeleteOperationRequest name */
            name?: (string|null);
        }

        /** Represents a DeleteOperationRequest. */
        class DeleteOperationRequest implements IDeleteOperationRequest {

            /**
             * Constructs a new DeleteOperationRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IDeleteOperationRequest);

            /** DeleteOperationRequest name. */
            public name: string;

            /**
             * Creates a new DeleteOperationRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DeleteOperationRequest instance
             */
            public static create(properties?: google.longrunning.IDeleteOperationRequest): google.longrunning.DeleteOperationRequest;

            /**
             * Encodes the specified DeleteOperationRequest message. Does not implicitly {@link google.longrunning.DeleteOperationRequest.verify|verify} messages.
             * @param message DeleteOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IDeleteOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DeleteOperationRequest message, length delimited. Does not implicitly {@link google.longrunning.DeleteOperationRequest.verify|verify} messages.
             * @param message DeleteOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IDeleteOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DeleteOperationRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DeleteOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.DeleteOperationRequest;

            /**
             * Decodes a DeleteOperationRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DeleteOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.DeleteOperationRequest;

            /**
             * Verifies a DeleteOperationRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DeleteOperationRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DeleteOperationRequest
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.DeleteOperationRequest;

            /**
             * Creates a plain object from a DeleteOperationRequest message. Also converts values to other types if specified.
             * @param message DeleteOperationRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.DeleteOperationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DeleteOperationRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a WaitOperationRequest. */
        interface IWaitOperationRequest {

            /** WaitOperationRequest name */
            name?: (string|null);

            /** WaitOperationRequest timeout */
            timeout?: (google.protobuf.IDuration|null);
        }

        /** Represents a WaitOperationRequest. */
        class WaitOperationRequest implements IWaitOperationRequest {

            /**
             * Constructs a new WaitOperationRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IWaitOperationRequest);

            /** WaitOperationRequest name. */
            public name: string;

            /** WaitOperationRequest timeout. */
            public timeout?: (google.protobuf.IDuration|null);

            /**
             * Creates a new WaitOperationRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WaitOperationRequest instance
             */
            public static create(properties?: google.longrunning.IWaitOperationRequest): google.longrunning.WaitOperationRequest;

            /**
             * Encodes the specified WaitOperationRequest message. Does not implicitly {@link google.longrunning.WaitOperationRequest.verify|verify} messages.
             * @param message WaitOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IWaitOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified WaitOperationRequest message, length delimited. Does not implicitly {@link google.longrunning.WaitOperationRequest.verify|verify} messages.
             * @param message WaitOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IWaitOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WaitOperationRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WaitOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.WaitOperationRequest;

            /**
             * Decodes a WaitOperationRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns WaitOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.WaitOperationRequest;

            /**
             * Verifies a WaitOperationRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a WaitOperationRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns WaitOperationRequest
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.WaitOperationRequest;

            /**
             * Creates a plain object from a WaitOperationRequest message. Also converts values to other types if specified.
             * @param message WaitOperationRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.WaitOperationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this WaitOperationRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an OperationInfo. */
        interface IOperationInfo {

            /** OperationInfo responseType */
            responseType?: (string|null);

            /** OperationInfo metadataType */
            metadataType?: (string|null);
        }

        /** Represents an OperationInfo. */
        class OperationInfo implements IOperationInfo {

            /**
             * Constructs a new OperationInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IOperationInfo);

            /** OperationInfo responseType. */
            public responseType: string;

            /** OperationInfo metadataType. */
            public metadataType: string;

            /**
             * Creates a new OperationInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OperationInfo instance
             */
            public static create(properties?: google.longrunning.IOperationInfo): google.longrunning.OperationInfo;

            /**
             * Encodes the specified OperationInfo message. Does not implicitly {@link google.longrunning.OperationInfo.verify|verify} messages.
             * @param message OperationInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IOperationInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OperationInfo message, length delimited. Does not implicitly {@link google.longrunning.OperationInfo.verify|verify} messages.
             * @param message OperationInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IOperationInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OperationInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OperationInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.OperationInfo;

            /**
             * Decodes an OperationInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OperationInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.OperationInfo;

            /**
             * Verifies an OperationInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OperationInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OperationInfo
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.OperationInfo;

            /**
             * Creates a plain object from an OperationInfo message. Also converts values to other types if specified.
             * @param message OperationInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.OperationInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OperationInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace type. */
    namespace type {

        /** Properties of a Date. */
        interface IDate {

            /** Date year */
            year?: (number|null);

            /** Date month */
            month?: (number|null);

            /** Date day */
            day?: (number|null);
        }

        /** Represents a Date. */
        class Date implements IDate {

            /**
             * Constructs a new Date.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.type.IDate);

            /** Date year. */
            public year: number;

            /** Date month. */
            public month: number;

            /** Date day. */
            public day: number;

            /**
             * Creates a new Date instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Date instance
             */
            public static create(properties?: google.type.IDate): google.type.Date;

            /**
             * Encodes the specified Date message. Does not implicitly {@link google.type.Date.verify|verify} messages.
             * @param message Date message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.type.IDate, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Date message, length delimited. Does not implicitly {@link google.type.Date.verify|verify} messages.
             * @param message Date message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.type.IDate, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Date message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Date
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.type.Date;

            /**
             * Decodes a Date message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Date
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.type.Date;

            /**
             * Verifies a Date message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Date message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Date
             */
            public static fromObject(object: { [k: string]: any }): google.type.Date;

            /**
             * Creates a plain object from a Date message. Also converts values to other types if specified.
             * @param message Date
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.type.Date, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Date to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}
