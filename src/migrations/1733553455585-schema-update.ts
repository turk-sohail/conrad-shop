import { MigrationInterface, QueryRunner } from "typeorm";

export class SchemaUpdate1733553455585 implements MigrationInterface {
    name = 'SchemaUpdate1733553455585'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "order_item" ("orderId" integer NOT NULL, "productId" integer NOT NULL, "quatity" integer NOT NULL, "price" numeric(6,2) NOT NULL, CONSTRAINT "PK_7e383dc486afc7800bf87d1c11a" PRIMARY KEY ("orderId", "productId"))`);
        await queryRunner.query(`CREATE TABLE "product_To_category" ("productId" integer NOT NULL, "categoryId" integer NOT NULL, CONSTRAINT "PK_23ac5d24c78b947ebfc80e613b6" PRIMARY KEY ("productId", "categoryId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_7ddfe2ad12618663c4de2613a4" ON "product_To_category" ("productId") `);
        await queryRunner.query(`CREATE INDEX "IDX_b9ae9daf091f566bbe1cbb6c5a" ON "product_To_category" ("categoryId") `);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "description" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "price" TYPE numeric(6,2)`);
        await queryRunner.query(`ALTER TABLE "order_item" ADD CONSTRAINT "FK_646bf9ece6f45dbe41c203e06e0" FOREIGN KEY ("orderId") REFERENCES "order"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order_item" ADD CONSTRAINT "FK_904370c093ceea4369659a3c810" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "product_To_category" ADD CONSTRAINT "FK_7ddfe2ad12618663c4de2613a4b" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "product_To_category" ADD CONSTRAINT "FK_b9ae9daf091f566bbe1cbb6c5ac" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product_To_category" DROP CONSTRAINT "FK_b9ae9daf091f566bbe1cbb6c5ac"`);
        await queryRunner.query(`ALTER TABLE "product_To_category" DROP CONSTRAINT "FK_7ddfe2ad12618663c4de2613a4b"`);
        await queryRunner.query(`ALTER TABLE "order_item" DROP CONSTRAINT "FK_904370c093ceea4369659a3c810"`);
        await queryRunner.query(`ALTER TABLE "order_item" DROP CONSTRAINT "FK_646bf9ece6f45dbe41c203e06e0"`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "price" TYPE numeric`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "description" SET NOT NULL`);
        await queryRunner.query(`DROP INDEX "public"."IDX_b9ae9daf091f566bbe1cbb6c5a"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_7ddfe2ad12618663c4de2613a4"`);
        await queryRunner.query(`DROP TABLE "product_To_category"`);
        await queryRunner.query(`DROP TABLE "order_item"`);
    }

}
