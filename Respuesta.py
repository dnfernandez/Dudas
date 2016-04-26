from google.appengine.ext import ndb


class Respuesta(ndb.Model):
    idPregunta = ndb.IntegerProperty(required=True, indexed=True)
    texto = ndb.TextProperty(required=True)
    autor = ndb.StringProperty(required=True)
    fecha = ndb.DateProperty(auto_now_add=True)
