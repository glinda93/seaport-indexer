-- ----------------------------
-- Sequence structure for order_item_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."order_item_id_seq";
CREATE SEQUENCE "public"."order_item_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for payment_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."payment_id_seq";
CREATE SEQUENCE "public"."payment_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Table structure for order
-- ----------------------------
DROP TABLE IF EXISTS "public"."order";
CREATE TABLE "public"."order" (
  "id" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "seller" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "buyer" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "created_at" timestamptz(6) DEFAULT now(),
  "transaction_hash" varchar COLLATE "pg_catalog"."default" NOT NULL
)
;

-- ----------------------------
-- Table structure for order_item
-- ----------------------------
DROP TABLE IF EXISTS "public"."order_item";
CREATE TABLE "public"."order_item" (
  "id" int8 NOT NULL GENERATED BY DEFAULT AS IDENTITY (
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
),
  "order_id" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "token_address" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "token_id" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "amount" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "created_at" timestamptz(6) DEFAULT now()
)
;

-- ----------------------------
-- Table structure for payment
-- ----------------------------
DROP TABLE IF EXISTS "public"."payment";
CREATE TABLE "public"."payment" (
  "id" int8 NOT NULL GENERATED BY DEFAULT AS IDENTITY (
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
),
  "order_id" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "token_address" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "token_id" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "amount" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "created_at" timestamptz(6) DEFAULT now()
)
;

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."order_item_id_seq"
OWNED BY "public"."order_item"."id";
SELECT setval('"public"."order_item_id_seq"', 1357, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."payment_id_seq"
OWNED BY "public"."payment"."id";
SELECT setval('"public"."payment_id_seq"', 4592, true);

-- ----------------------------
-- Primary Key structure for table order
-- ----------------------------
ALTER TABLE "public"."order" ADD CONSTRAINT "order_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table order_item
-- ----------------------------
CREATE INDEX "fki_order_order_item_id" ON "public"."order_item" USING btree (
  "order_id" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);

-- ----------------------------
-- Primary Key structure for table order_item
-- ----------------------------
ALTER TABLE "public"."order_item" ADD CONSTRAINT "order_item_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table payment
-- ----------------------------
CREATE INDEX "fki_o" ON "public"."payment" USING btree (
  "order_id" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);

-- ----------------------------
-- Primary Key structure for table payment
-- ----------------------------
ALTER TABLE "public"."payment" ADD CONSTRAINT "payment_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Foreign Keys structure for table order_item
-- ----------------------------
ALTER TABLE "public"."order_item" ADD CONSTRAINT "order_order_item_id" FOREIGN KEY ("order_id") REFERENCES "public"."order" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table payment
-- ----------------------------
ALTER TABLE "public"."payment" ADD CONSTRAINT "payment_order_id" FOREIGN KEY ("order_id") REFERENCES "public"."order" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;