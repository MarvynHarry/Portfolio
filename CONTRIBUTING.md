Contributing / Workflow

Este proyecto usa un flujo simple de Issues + Pull Requests, incluso siendo un repo personal.

Paso 1, Issue primero: cualquier bug o feature nueva se registra como Issue antes de tocar codigo, describiendo el problema y el impacto.

Paso 2, Branch por cambio: fix/... para bugs, feat/... para features, chore/... para mantenimiento (dependencias, limpieza, config).

Paso 3, Pull Request: cada branch se sube como PR hacia main, con referencia al issue (Closes #N), que cambia y por que, y como se probo.

Paso 4, Revision antes de mergear: releer el diff completo del PR antes de aprobar el merge.

Paso 5, Merge y limpieza: mergear el PR y borrar la branch.

No se commitea directo a main salvo cambios triviales de documentacion.
