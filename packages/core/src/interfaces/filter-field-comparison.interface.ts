/**
 * Field comparisons with a type of `boolean`.
 */
export interface BooleanFieldComparisons {
  /**
   * Is operator.
   *
   * ```ts
   * // field IS TRUE
   * { field: { is: true } }
   *
   * // field IS FALSE
   * { field: { is: false } }
   *
   * // field IS NULL
   * { field: { is: null } }
   * ```
   */
  is?: boolean | null;
  /**
   * Is not operator.
   *
   * ```ts
   * // field IS NOT TRUE
   * { field: { isNot: true } }
   *
   * // field IS NOT FALSE
   * { field: { isNot: false } }
   *
   * // field IS NOT NULL
   * { field: { isNot: null } }
   * ```
   */
  isNot?: boolean | null;
}

/**
 * Field comparisons for all types that are NOT `null` or `boolean`.
 *
 * @typeparam FieldType - The TS type of the field.
 */
export interface CommonFieldComparisonType<FieldType> extends BooleanFieldComparisons {
  /**
   * Field equality.
   *
   * ```ts
   * // field = "bar"
   * { field: { eq: 'bar' } }
   * ```
   */
  eq?: FieldType;
  /**
   * Field in-equality.
   *
   * ```ts
   * // field != "bar"
   * { field: { neq: 'bar' } }
   * ```
   */
  neq?: FieldType;
  /**
   * Greater than comparison.
   *
   * ```ts
   * // field > 1
   * { field: { gt: 1 } }
   * ```
   */
  gt?: FieldType;
  /**
   * Greater than or equal to comparison.
   *
   * ```ts
   * // field >= 1
   * { field: { gte: 1 } }
   * ```
   */
  gte?: FieldType;
  /**
   * Less than comparison.
   *
   * ```ts
   * // field < 1
   * { field: { lt: 1 } }
   * ```
   */
  lt?: FieldType;
  /**
   * Less than or equal to comparison.
   *
   * ```ts
   * // field <= 1
   * { field: { lte: 1 } }
   * ```
   */
  lte?: FieldType;
  /**
   * Check that a field is included in an array of values.
   *
   * ```ts
   * // field IN ("a", "b", "c")
   * { field: { in: ['a', 'b', 'c'] } }
   * ```
   */
  in?: FieldType[];
  /**
   * Check that a field is not included in an array of values.
   *
   * ```ts
   * // field NOT IN ("a", "b", "c")
   * { field: { notIn: ['a', 'b', 'c'] } }
   * ```
   */
  notIn?: FieldType[];
}

/**
 * Field comparisons for `string` types.
 */
export interface StringFieldComparisons extends CommonFieldComparisonType<string> {
  /**
   * Like comparision.
   *
   * ```ts
   * // field LIKE "Foo%"
   * { field: { like: 'Foo%' } }
   * ```
   */
  like?: string;
  /**
   * Not like comparison.
   *
   * ```ts
   * // field NOT LIKE "Foo%"
   * { field: { notLike: 'Foo%' } }
   * ```
   */
  notLike?: string;
  /**
   * Case insensitive like comparison.
   *
   * ```ts
   * // field ILIKE "Foo%"
   * { field: { iLike: 'Foo%' } }
   * ```
   */
  iLike?: string;
  /**
   * Case insensitive not like comparison.
   *
   * ```ts
   * // field NOT ILIKE "Foo%"
   * { field: { notILike: 'Foo%' } }
   * ```
   */
  notILike?: string;
}

/**
 * Type for field comparisons.
 *
 * * `string` - [[StringFieldComparisons]]
 * * `boolean|null|undefined|never` - [[BooleanFieldComparisons]]
 * * all other types use [[CommonFieldComparisonType]]
 */
export type FilterFieldComparison<FieldType> = FieldType extends string
  ? StringFieldComparisons
  : FieldType extends boolean
  ? BooleanFieldComparisons
  : FieldType extends null | undefined | never
  ? BooleanFieldComparisons
  : CommonFieldComparisonType<FieldType>;

/**
 * Type for all comparision operators for a field type.
 *
 * @typeparam FieldType - The TS type of the field.
 */
export type FilterComparisonOperators<FieldType> = keyof FilterFieldComparison<FieldType>;
