import express from "express";
import createAccountsDatabase from "../../database/DatabasePersistance/AccountsDatabasePersistance/__tests__/helpers/createAccountsDatabase";
import setHeaders from "../helpers/setHeaders";

const accountsRouter = express();

accountsRouter.get("/", async (req, res) => {
  try {
    const accountsDatabase = await createAccountsDatabase();
    const accounts = await accountsDatabase.fetchAll();
    if (accounts.success) {
      setHeaders(res);
      return res.json(accounts.data);
    } else throw new Error(accounts.error.message);
  } catch (e) {
    if (e instanceof Error) return res.status(404).json(e);
  }
});

accountsRouter.get("/:id", async (req, res) => {
  const customerID = Number(req.params.id);
  try {
    const accountsDatabase = await createAccountsDatabase();
    const account = await accountsDatabase.fetchByCustomerID(customerID);
    if (account.success) {
      setHeaders(res);
      return res.json(account.data);
    } else throw new Error(account.error.message);
  } catch (e) {
    if (e instanceof Error) return res.status(404).json(e);
  }
});

accountsRouter.put("/freeze/:id", async (req, res) => {
  const accountID = Number(req.params.id);
  try {
    const accountsDatabase = await createAccountsDatabase();
    const freezeResult = await accountsDatabase.freeze(accountID);
    if (freezeResult.success) return res.json(freezeResult.data);
    else throw new Error(freezeResult.error.message);
  } catch (e) {
    if (e instanceof Error) return res.status(404).json(e);
  }
});

accountsRouter.put("/close/:id", async (req, res) => {
  const accountID = Number(req.params.id);
  try {
    const accountsDatabase = await createAccountsDatabase();
    const closeResult = await accountsDatabase.close(accountID);
    if (closeResult.success) return res.json(closeResult.data);
    else throw new Error(closeResult.error.message);
  } catch (e) {
    if (e instanceof Error) return res.status(404).json(e);
  }
});

accountsRouter.put("/activate/:id", async (req, res) => {
  const accountID = Number(req.params.id);
  try {
    const accountsDatabase = await createAccountsDatabase();
    const activateResult = await accountsDatabase.activate(accountID);
    if (activateResult.success) return res.json(activateResult.data);
    else throw new Error(activateResult.error.message);
  } catch (e) {
    if (e instanceof Error) return res.status(404).json(e);
  }
});

export default accountsRouter;
