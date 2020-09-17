# OE Catalog Service

### Migration Help

_Create Model_

```
sequelize model:create --name Product --attributes name:string,sku:string
```

_Migrate Model_

```
sequelize db:migrate
```

_If you change existing model_

```
sequelize db:migrate:undo:all
```
